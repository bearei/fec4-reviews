import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../util/Stars';

const AveragesStars = ({ average }) => (
  <span id="averages-stars">
    <span>Overall</span>
    <Stars average={Number.isNaN(average) ? 0 : average} />
    <span>{average}</span>
  </span>
);

AveragesStars.propTypes = {
  average: PropTypes.number,
};

AveragesStars.defaultProps = {
  average: 0,
};

export default AveragesStars;
