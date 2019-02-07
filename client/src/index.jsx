import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id='nav'>
        <h1>HREI Reviews</h1><span>WRITE</span>
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
        <div id='reviews'>
          <div id='review'>
            <h1>* * * * - Bill - 2 Days ago</h1>
            <h2>Some title</h2>
            <h3>SOme text Some more text</h3>
            <h3> v x I recommend</h3>
            <h3>Helfpul Yes No Report as inappropriate</h3> 
          </div>
          <h1>------------------------------</h1>
          <div id='review'>
            <h1>* * * * - Bill - 2 Days ago</h1>
            <h2>Some title</h2>
            <h3>SOme text Some more text</h3>
            <h3> v x I recommend</h3>
            <h3>Helfpul Yes No Report as inappropriate</h3> 
          </div>
        </div>
        <h1>------------------------------</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));