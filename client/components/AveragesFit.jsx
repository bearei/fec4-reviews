import React from 'react';
import FitBar from './FitBar';

const AveragesFit = (props) => {
  const classes = { ...props };
  return (
    <div>
      <span>Fit</span>
      <FitBar average={classes.average} />
      <p>Runs Small    Runs Large</p>
    </div>
  );
};

export default AveragesFit;
