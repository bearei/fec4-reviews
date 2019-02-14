import React from 'react';
import AveragesFitBar from './AveragesFitBar';

const AveragesFit = (props) => {
  const classes = { ...props };
  return (
    <div>
      <span>Fit</span>
      <AveragesFitBar average={classes.average} />
      <p>Runs Small    Runs Large</p>
    </div>
  );
};

export default AveragesFit;
