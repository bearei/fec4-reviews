import React from 'react';

const ActiveFilters = (props) => {
  const classes = { ...props };
  return (
    <div id="active-filters" className={classes.star > 0 ? '' : 'hidden'}>
      <div>Active Filters</div>
      <div onClick={classes.clear} role="button" tabIndex={0} onKeyPress={() => {}} className="button-filter">{classes.star > 1 ? `${classes.star} stars` : '1 star'}</div>
      <div onClick={classes.clear} role="button" tabIndex={0} onKeyPress={() => {}} className="button-clear-filter">Clear All</div>
    </div>
  );
};

export default ActiveFilters;
