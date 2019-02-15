import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getIcon = (number, average) => {
  let result;
  if (number <= Math.floor(average)) {
    result = 'star';
  } else if (number <= Math.ceil(average)) {
    result = 'star-half';
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
      {numbers.map(number => (
        <FontAwesomeIcon
          icon={getIcon(number, classes.average)}
          size="lg"
          className={number > Math.ceil(classes.average) ? 'background-star' : 'foreground-star'}
        />
      ))
      }
    </span>
  );
};

export default Stars;
