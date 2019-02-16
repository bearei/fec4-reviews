import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LABEL = {
  0: 'Most Relevant',
  1: 'Most Helpful',
  2: 'Highest to Lowest Rating',
  3: 'Lowest to Highest Rating',
  4: 'Most Recent',
};
const numbers = Array.from({ length: 5 }, (v, k) => k);

const SortSelector = ({ selector, changeSort }) => (
  <div id="sort-selector">
    <FontAwesomeIcon className={selector > 0 ? 'hidden' : ''} icon="question-circle" size="sm" />
    <span>
      <div className="dropdown">
        <div type="button" className="dropbtn">
        Sort by:
          {` ${LABEL[selector]}`}
        </div>
        <div className="dropdown-content">
          {numbers.map((number, index) => (
            <div key={numbers[index]} tabIndex={0} role="button" onKeyPress={() => {}} onClick={() => changeSort(number)}>
              {LABEL[number]}
            </div>
          ))
        }
        </div>
      </div>
    </span>
  </div>
);

SortSelector.propTypes = {
  selector: PropTypes.number,
  changeSort: PropTypes.func,
};

SortSelector.defaultProps = {
  selector: 0,
  changeSort: () => {},
};

export default SortSelector;
