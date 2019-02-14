import React from 'react';
import AveragesStars from './AveragesStars';

const Averages = (props) => {
  const classes = { ...props };
  return (
    <div>
      <h1>Average Customer Rating</h1>
      <AveragesStars average={classes.average} />
      <h1>Fit   |  |  |  ||| |</h1>
      <p>Runs Small    Runs Large</p>
    </div>
  );
};

export default Averages;
