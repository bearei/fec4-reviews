import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { faTimesCircle, faCheckCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import ReviewList from './components/ReviewList.jsx';
import ModalModel from './components/ModalModel.jsx';

library.add(faTimesCircle);
library.add(faStar);
library.add(faCheckCircle);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      itemId: 1,
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
      error: err => console.err('Get:', err),
    });
  }

  render() {
    const classes = { ...this.state };
    return (
      <div>
        <div id="nav">
          <h1>HREI Reviews</h1>
          <ModalModel />
          <div id="snapshot">
            <h1>Rating Snapshot</h1>
            <h2>Select a row below to filter</h2>
            <h3>5 * * * - -</h3>
            <h3>4 * - - - -</h3>
            <h3>3 - - - - -</h3>
            <h3>2 - - - - -</h3>
            <h3>1 * - - - -</h3>
            <h2>1 - 2 of 2 Reviews</h2>
          </div>
          <div id="averages">
            <h1>Average Customer Rating</h1>
            <h1>* * * - -</h1>
            <h1>Fit   |  |  |  ||| |</h1>
            <p>Runs Small    Runs Large</p>
            <h1>Sort By Most Relvant</h1>
          </div>
        </div>
        <hr />
        <ReviewList reviews={classes.reviews} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
