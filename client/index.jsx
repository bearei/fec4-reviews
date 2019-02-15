import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
  faTimesCircle, faCheckCircle, faStar, faQuestionCircle, faStarHalf,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import ReviewList from './components/ReviewList';
import ModalModel from './components/ModalModel';
import RatingSnapshot from './components/RatingSnapshot';
import Averages from './components/Averages';
import ReviewIndex from './components/ReviewIndex';
import SortSelector from './components/SortSelector';

library.add(faTimesCircle);
library.add(faStar);
library.add(faCheckCircle);
library.add(faQuestionCircle);
library.add(faStarHalf);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      itemId: Math.ceil(Math.random() * 100),
      selector: 0,
      filter: 0,
      showing: 8,
    };
  }

  componentDidMount() {
    const classes = { ...this.state };
    $.ajax({
      url: `/reviews/${classes.itemId}`,
      type: 'GET',
      contentType: 'application/json',
      success: (results) => {
        this.setState({
          reviews: results,
        });
      },
      error: err => console.log(err),
    });
  }

  getAverageFit() {
    const classes = { ...this.state };
    const total = classes.reviews.reduce((res, review) => res + review.fit, 0);
    const count = classes.reviews.reduce((res, review) => review.fit > 0 ? res + 1 : res, 0);
    return Math.ceil((total / count) * 10) / 10;
  }

  setFilter(id) {
    this.setState({ filter: id });
  }

  clearFilter() {
    this.setState({ filter: 0 });
  }

  filteredTotal() {
    const classes = { ...this.state };
    let total = 0;
    if (classes.filter > 0) {
      total = classes.reviews.filter(review => review.rating === classes.filter).length;
    } else {
      total = classes.reviews.length;
    }
    return total;
  }

  render() {
    const classes = { ...this.state };
    return (
      <div>
        <h1>HREI Reviews</h1>
        <ModalModel />
        <div className="nav">
          <RatingSnapshot
            setFilter={this.setFilter}
            clearFilter={this.clearFilter}
            reviews={classes.reviews}
          />
          <Averages average={this.getAverageFit()} />
          <ReviewIndex total={this.filteredTotal()} />
          <SortSelector selector={classes.selector} />
        </div>
        <ReviewList
          reviews={classes.reviews.slice(0, classes.showing)}
          hasMore={classes.showing > classes.reviews.length}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
