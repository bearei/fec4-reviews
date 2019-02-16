import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ActiveFilters = ({ star, clear }) => (
  <div id="active-filters" className={star > 0 ? '' : 'hidden'}>
    <div id="filters-title">Active Filters</div>
    <div onClick={clear} role="button" tabIndex={0} onKeyPress={() => {}} className="button-filter">
      {star > 1 ? `${star} stars ` : '1 star '}
      <FontAwesomeIcon icon="times-circle" color="white" />
    </div>
    <div onClick={clear} role="button" tabIndex={0} onKeyPress={() => {}} className="button-clear-filter">
      {'Clear All '}
      <FontAwesomeIcon icon="times-circle" color="black" />
    </div>
  </div>
);

ActiveFilters.propTypes = {
  star: PropTypes.number,
  clear: PropTypes.func,
};

ActiveFilters.defaultProps = {
  star: 0,
  clear: () => {},
};

export default ActiveFilters;
