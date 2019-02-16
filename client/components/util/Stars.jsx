import React from 'react';
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

const Stars = (props) => {
  const classes = { ...props };
  const numbers = Array.from({ length: 5 }, (v, k) => k + 1);
  return (
    <span>
      {numbers.map((number, index) => (
        <FontAwesomeIcon
          icon={getIcon(number, classes.average)}
          size="lg"
          key={numbers[index]}
          className={number > Math.ceil(classes.average) ? 'background-star' : 'foreground-star'}
        />
      ))
      }
    </span>
  );
};

export default Stars;
