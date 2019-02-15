import React from 'react';
import Stars from './Stars';

const AveragesStars = (props) => {
  const classes = { ...props };
  return (
    <span>
      <span>Overall</span>
      <Stars average={classes.average === NaN ? 0 : classes.average} />
      <span>{classes.average}</span>
    </span>
  );
};

export default AveragesStars;
