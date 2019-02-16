import React from 'react';
import PropTypes from 'prop-types';

const RatingBar = ({ size }) => (
  <div id="rating-bar" className="rating-bar" />
);

RatingBar.propTypes = {
  size: PropTypes.number,
};

RatingBar.defaultProps = {
  size: 0,
};

export default RatingBar;
