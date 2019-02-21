import React from 'react';
import PropTypes from 'prop-types';

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
    <div className="f-right">
      <div className="sort-text-container same-line">
        <i className={selector > 0 ? 'hidden fas fa-question-circle fa-sm' : 'fas fa-question-circle fa-sm'} />
        <div className="sort-text hidden">
          <b className="bold-right">Relavancy sort</b>
          puts the best reviews at the top We
          look at things like helpfulness votes, latest reviews,
          pictures and other traits that readers look for in their
          reviews.
        </div>
      </div>
      <span>
        <div className="dropdown">
          <div type="button" className="dropbtn">
          Sort by:
            {` ${LABEL[selector]} ▼`}
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
