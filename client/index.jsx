import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
  faTimesCircle, faCheckCircle, faStar, faQuestionCircle, faStarHalf,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import ReviewList from './components/review/ReviewList';
import ModalModel from './components/modal/ModalModel';
import RatingSnapshot from './components/nav/RatingSnapshot';
import Averages from './components/nav/Averages';
import ReviewIndex from './components/nav/ReviewIndex';
import SortSelector from './components/nav/SortSelector';

library.add(faTimesCircle);
library.add(faStar);
library.add(faCheckCircle);
library.add(faQuestionCircle);
library.add(faStarHalf);

const SORT = {
  // eslint-disable-next-line no-underscore-dangle
  0: (a, b) => a._id - b._id,
  1: (a, b) => a.helpful - b.helpful,
  2: (a, b) => a.rating - b.rating,
  3: (a, b) => b.rating - a.rating,
  4: (a, b) => b.createdAt - a.createdAt,
}

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
    this.handleMore = this.handleMore.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.changeSort = this.changeSort.bind(this);
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
    this.setState({ filter: id, showing: 8 });
  }

  clearFilter() {
    this.setState({ filter: 0 });
  }

  handleMore() {
    this.setState(prevState => (
      { showing: prevState.showing + 8 }
    ));
  }

  filter() {
    const classes = { ...this.state };
    let result = classes.reviews;
    if (classes.filter > 0) {
      result = classes.reviews.filter(review => review.rating === classes.filter)
    }
    return result;
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

  changeSort(type) {
    this.setState(prevState => (
      { selector: type, reviews: prevState.reviews.sort(SORT[type]) }
    ));
  }

  render() {
    const classes = { ...this.state };
    return (
      <div>
        <h1>HREI Reviews</h1>
        <ModalModel empty={classes.reviews.length === 0} />
        <div className={classes.reviews.length === 0 ? 'hidden' : 'nav'}>
          <RatingSnapshot
            setFilter={this.setFilter}
            clearFilter={this.clearFilter}
            reviews={classes.reviews}
          />
          <Averages average={this.getAverageFit()} />
          <ReviewIndex total={this.filteredTotal()} showing={classes.showing} />
          <SortSelector changeSort={this.changeSort} selector={classes.selector} />
        </div>
        <ReviewList
          reviews={this.filter(classes.reviews).slice(0, classes.showing)}
          hasMore={classes.showing < this.filter(classes.reviews).length}
          handleMore={this.handleMore}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
