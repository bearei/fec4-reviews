import React from 'react';
import PropTypes from 'prop-types';

const RatingBar = ({ size }) => (
  <span id="rating-bar">
    <div className="rating-bar">
      <div className="rating-bar-top" style={{ width: `${size}%` }} />
    </div>
  </span>
);

RatingBar.propTypes = {
  size: PropTypes.number,
};

RatingBar.defaultProps = {
  size: 0,
};

export default RatingBar;
