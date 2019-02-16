import React from 'react';
import PropTypes from 'prop-types';

const numbers = Array.from({ length: 100 }, (v, k) => k + 1);

const RatingBar = ({ size }) => (
  <span id="rating-bar">
    {numbers.map((number, index) => <div key={numbers[index]} className={number > size ? 'rating-empty' : 'rating-full'} />)}
  </span>
);

RatingBar.propTypes = {
  size: PropTypes.number,
};

RatingBar.defaultProps = {
  size: 0,
};

export default RatingBar;
