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
    <div className="star-ratings">
      <div className="star-ratings-top" style={{ width: `${average * 20}%` }}>
        {numbers.map((number, index) => <span key={numbers[index]}>★</span>)}
      </div>
      <div className="star-ratings-bottom">
        {numbers.map((number, index) => <span key={numbers[index]}>★</span>)}
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
