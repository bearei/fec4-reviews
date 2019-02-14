import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AveragesStars = (props) => {
  const classes = { ...props };
  const numbers = Array.from({ length: 5 }, (v, k) => k + 1);
  return (
    <span>
      <span>Overall</span>
      {numbers.map(number => <FontAwesomeIcon icon="star" size="lg" className={number > classes.average ? 'background-star' : 'foreground-star'} />)}
      <span>{classes.average}</span>
    </span>
  );
};

export default AveragesStars;
