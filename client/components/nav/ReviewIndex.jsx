import React from 'react';

const ReviewIndex = (props) => {
  const classes = { ...props };
  return (
    <div>
      <span> 1 of </span>
      {classes.showing < classes.total ? classes.showing : classes.total}
      <span> out of </span>
      {classes.total}
      <span> Reviews</span>
    </div>
  );
};

export default ReviewIndex;
