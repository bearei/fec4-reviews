import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LABEL = {
  0: 'Most Relevant',
  1: 'Most Helpful',
  2: 'Highest to Lowest Rating',
  3: 'Lowest to Highest Rating',
  4: 'Most Recent',
};

const SortSelector = (props) => {
  const classes = { ...props };
  const numbers = Array.from({ length: 5 }, (v, k) => k);
  return (
    <div>
      <FontAwesomeIcon icon="question-circle" size="sm" />
      <span>
        <div className="dropdown">
          <button type="button" tabIndex={0} className="dropbtn">
          Sort by:
            {` ${LABEL[classes.selector]}`}
          </button>
          <div className="dropdown-content">
            {numbers.map(number => <div>{LABEL[number]}</div>)}
          </div>
        </div>
      </span>
    </div>
  );
};

export default SortSelector;
