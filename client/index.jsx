import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import sampleReviews from './sample_data';
import ReviewList from './components/ReviewList.jsx';
import ModalModel from './components/ModalModel.jsx';
import $ from 'jquery';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      itemId: 1,
      show: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/reviews/' + this.state.itemId,
        type: 'GET',
        contentType: 'application/json',
        success: (results) => {
          this.setState({
            reviews: results
          });
        },
        error: (err) => console.log('Get:', err)
    });
  }

  handleOpen() {
    console.log('SHOW');
    this.setState({ show: true});
  }

  handleClose() {
    console.log('HIDE');
    this.setState({ show: false});
  }

  render() {
    return (
      <div>
        <div id='nav'>
          <h1>HREI Reviews</h1>
          
          
          {/* <Modal show={this.state.show} handleClose={this.handleClose}>
          <p>TEST</p>
          </Modal> */}
          <ModalModel />
          <div id='snapshot'>
            <h1>Rating Snapshot</h1>
            <h2>Select a row below to filter</h2>
            <h3>5 * * * - -</h3>
            <h3>4 * - - - -</h3>
            <h3>3 - - - - -</h3>
            <h3>2 - - - - -</h3>
            <h3>1 * - - - -</h3>
            <h2>1 - 2 of 2 Reviews</h2>
          </div>
          <div id='averages'>
            <h1>Average Customer Rating</h1>
            <h1>* * * - -</h1>
            <h1>Fit   |  |  |  ||| |</h1>
            <p>Runs Small    Runs Large</p>
            <h1>Sort By Most Relvant</h1>
          </div>
        </div>
          <h1>------------------------------</h1>
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
