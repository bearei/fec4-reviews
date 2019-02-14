import React from 'react';

const Averages = (props) => {
  const classes = { ...props };
  return (
    <div>
      <span> 1 of </span>
      {classes.total < 8 ? 8 : classes.total}
      <span> out of </span>
      {classes.total}
      <span> Reviews</span>
    </div>
  );
};

export default Averages;
