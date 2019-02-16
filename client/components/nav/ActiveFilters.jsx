import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ActiveFilters = (props) => {
  const classes = { ...props };
  return (
    <div id="active-filters" className={classes.star > 0 ? '' : 'hidden'}>
      <div>Active Filters</div>
      <div onClick={classes.clear} role="button" tabIndex={0} onKeyPress={() => {}} className="button-filter">
        {classes.star > 1 ? `${classes.star} stars ` : '1 star '}
        <FontAwesomeIcon icon="times-circle" color="white" />
      </div>
      <div onClick={classes.clear} role="button" tabIndex={0} onKeyPress={() => {}} className="button-clear-filter">
        {'Clear All '}
        <FontAwesomeIcon icon="times-circle" color="black" />
      </div>
    </div>
  );
};

export default ActiveFilters;
