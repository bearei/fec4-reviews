import React from 'react';
import Stars from '../util/Stars';

const AveragesStars = (props) => {
  const classes = { ...props };
  return (
    <span id="averages-stars">
      <span>Overall</span>
      <Stars average={Number.isNaN(classes.average) ? 0 : classes.average} />
      <span>{classes.average}</span>
    </span>
  );
};

export default AveragesStars;
