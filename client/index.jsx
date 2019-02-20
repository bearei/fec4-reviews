import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import path from 'path';
import axios from 'axios';
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
  4: (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      itemId: 1,
      selector: 0,
      filter: 0,
      showing: 8,
      helpful: [],
      flagged: [],
      spinner: false,
    };
    this.handleMore = this.handleMore.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.changeSort = this.changeSort.bind(this);
    this.fetch = this.fetch.bind(this);
    this.submit = this.submit.bind(this);
    this.patch = this.patch.bind(this);
  }

  componentWillMount() {
    this.setState({ spinner: true });
    this.fetch(() => this.setState({ spinner: false }));
  }

  getAverageFit() {
    const classes = { ...this.state };
    const total = classes.reviews.reduce((res, review) => res + review.fit, 0);
    const count = classes.reviews.reduce((res, review) => (review.fit > 0 ? res + 1 : res), 0);
    let result = 0;
    if (count > 0 && total > 0) {
      result = Math.ceil((total / count) * 10) / 10;
    }
    return result;
  }

  setFilter(id) {
    this.setState({ filter: id, showing: 8 });
  }

  fetch(callback) {
    const classes = { ...this.state };
    axios.get(path.join('reviews', classes.itemId.toString()))
      .then((res) => {
        this.setState({
          reviews: res.data,
          helpful: Array.from({ length: res.data.length }, () => ''),
        }, callback());
      })
      .catch(err => console.log(err));
  }

  patch(id, key) {
    const { reviews, helpful } = this.state;
    axios.patch(path.join('reviews', key, id))
      .then(() => {
        if (key !== 'flag') {
          this.setState({
            helpful: helpful.map((element, index) => (reviews[index]._id === id ? key : element)),
          });
        }
      })
      .catch(err => console.log('Patch', err));
  }

  submit(data, callback) {
    axios.post(path.join('reviews'), data)
      .then(() => {
        callback();
        this.setState({ selector: 0 }, this.fetch());
      })
      .catch(err => console.log('Post', err));
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
    this.setState({ selector: type, showing: 8 }, () => this.setState({
      helpful: Array.from({ length: classes.reviews.length }, () => ''),
    }));
  }

  render() {
    const {
      spinner, reviews, itemId, showing, selector, filter, helpful,
    } = this.state;
    return (
      <div>
        <h1>HREI Reviews</h1>
        <div className={spinner ? 'spinner' : 'hidden'}>
          <img alt="" src="/spinner.gif" />
        </div>
        <div className={spinner ? 'hidden' : ''}>
          <ModalModel
            empty={reviews.length === 0}
            itemId={itemId}
            submit={this.submit}
          />
          <div className={reviews.length === 0 ? 'hidden' : 'nav'}>
            <RatingSnapshot
              setFilter={this.setFilter}
              clearFilter={this.clearFilter}
              reviews={reviews}
            />
            <Averages average={this.getAverageFit()} />
            <ReviewIndex total={this.filteredTotal()} showing={showing} />
            <SortSelector changeSort={this.changeSort} selector={selector} />
            <ActiveFilters star={filter} clear={this.clearFilter} />
          </div>
          <ReviewList
            reviews={this.filter(reviews).slice(0, showing)}
            hasMore={showing < this.filter(reviews).length}
            handleMore={this.handleMore}
            patch={this.patch}
            helpful={helpful}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
