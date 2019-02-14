import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { faTimesCircle, faCheckCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import ReviewList from './components/ReviewList';
import ModalModel from './components/ModalModel';
import RatingSnapshot from './components/RatingSnapshot';
import Averages from './components/Averages';

library.add(faTimesCircle);
library.add(faStar);
library.add(faCheckCircle);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      itemId: Math.ceil(Math.random() * 100),
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
          filter: 0,
        });
      },
      error: err => console.log(err),
    });
  }

  setFilter(id) {
    this.setState({ filter: id });
  }

  clearFilter() {
    this.setState({ filter: 0 });
  }

  render() {
    const classes = { ...this.state };
    return (
      <div>
        <h1>HREI Reviews</h1>
        <ModalModel />
        <div id="nav">
          <RatingSnapshot setFilter={this.setFilter} clearFilter={this.clearFilter} reviews={classes.reviews} />
          <Averages />
        </div>
        <hr />
        <ReviewList reviews={classes.reviews} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
