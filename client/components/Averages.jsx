import React from 'react';
import AveragesStars from './AveragesStars';
import AveragesFit from './AveragesFit';

const Averages = (props) => {
  const classes = { ...props };
  return (
    <div>
      <h1>Average Customer Rating</h1>
      <AveragesStars average={isNaN(classes.average) ? 0 : classes.average} />
      <AveragesFit average={classes.average} />
    </div>
  );
};

export default Averages;
