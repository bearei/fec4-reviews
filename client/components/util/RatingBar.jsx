import React from 'react';


const RatingBar = (props) => {
  const classes = { ...props };
  const numbers = Array.from({ length: 100 }, (v, k) => k + 1);
  return (
    <span id="rating-bar">
      {numbers.map((number, index) => <div key={numbers[index]} className={number > classes.size ? 'rating-empty' : 'rating-full'} />)}
    </span>
  );
};

export default RatingBar;
