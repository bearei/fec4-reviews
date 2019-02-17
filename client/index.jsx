import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
  faTimesCircle, faCheckCircle, faStar, faQuestionCircle, faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import ReviewList from './components/review/ReviewList';
import ModalModel from './components/modal/ModalModel';
import RatingSnapshot from './components/nav/RatingSnapshot';
import Averages from './components/nav/Averages';
import ReviewIndex from './components/nav/ReviewIndex';
import SortSelector from './components/nav/SortSelector';
import ActiveFilters from './components/nav/ActiveFilters';

library.add(faTimesCircle);
library.add(faStar);
library.add(faCheckCircle);
library.add(faQuestionCircle);
library.add(faStarHalfAlt);

const SORT = {
  0: (a, b) => b.text.length - a.text.length,
  1: (a, b) => b.helpful - a.helpful,
  2: (a, b) => b.rating - a.rating,
  3: (a, b) => a.rating - b.rating,
  4: (a, b) => b.createdAt - a.createdAt,
};

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
    this.clearFilter = this.clearFilter.bind(this);
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
          indexes: Array.from({ length: results.length }, (v, k) => k + 1),
        });
      },
      error: err => console.log(err),
    });
  }

  getAverageFit() {
    const classes = { ...this.state };
    const total = classes.reviews.reduce((res, review) => res + review.fit, 0);
    const count = classes.reviews.reduce((res, review) => review.fit > 0 ? res + 1 : res, 0);
    let result = 0;
    if (count > 0 && total > 0) {
      result = Math.ceil((total / count) * 10) / 10;
    }
    return result;
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
      result = classes.reviews.filter(review => review.rating === classes.filter);
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
    const classes = { ...this.state };
    classes.reviews.sort(SORT[type]);
    this.setState({ selector: type, showing: 8 });
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
          <ActiveFilters star={classes.filter} clear={this.clearFilter} />
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
