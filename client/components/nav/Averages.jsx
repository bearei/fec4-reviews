import React from 'react';
import AveragesStars from './AveragesStars';
import FitBarContainer from '../util/FitBarContainer';

const Averages = (props) => {
  const classes = { ...props };
  return (
    <div id="averages">
      <h3 className="content-title">Average Customer Rating</h3>
      <AveragesStars average={Number.isNaN(classes.average) ? 0 : classes.average} />
      <FitBarContainer average={classes.average} />
    </div>
  );
};

export default Averages;
