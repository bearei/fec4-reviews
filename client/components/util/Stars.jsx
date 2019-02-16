import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const getIcon = (number, average) => {
  let result;
  if (number <= Math.floor(average)) {
    result = 'star';
  } else if (number <= Math.ceil(average)) {
    result = faStarHalfAlt;
  } else {
    result = 'star';
  }
  return result;
};

const numbers = Array.from({ length: 5 }, (v, k) => k + 1);

const Stars = ({ average }) => (
  <span>
    <div className="star-ratings-css">
      <div className="star-ratings-css-top" style={{ width: `${average * 20}%` }}>
        {numbers.map((number, index) => <span key={numbers[index]} style={{ width: '20%' }}>★</span>)}
      </div>
      <div className="star-ratings-css-bottom">
        {numbers.map((number, index) => <span key={numbers[index]} style={{ width: '20%' }}>★</span>)}
      </div>
    </div>
  </span>
);

Stars.propTypes = {
  average: PropTypes.number,
};

Stars.defaultProps = {
  average: 0,
};

export default Stars;
