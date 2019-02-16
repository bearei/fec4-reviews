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
    <div id="sort-selector">
      <FontAwesomeIcon className={classes.selector > 0 ? 'hidden' : ''} icon="question-circle" size="sm" />
      <span>
        <div className="dropdown">
          <div type="button" className="dropbtn">
          Sort by:
            {` ${LABEL[classes.selector]}`}
          </div>
          <div className="dropdown-content">
            {numbers.map((number, index) => <div key={numbers[index]}>{LABEL[number]}</div>)}
          </div>
        </div>
      </span>
    </div>
  );
};

export default SortSelector;
