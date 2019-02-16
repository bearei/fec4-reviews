import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RatingBar from './RatingBar';

const getScale = (count, total) => (
  Math.floor((count / total * 100))
);

const RatingBarContainer = (props) => {
  const classes = { ...props };
  return (
    <div id="rating-bar-container" role="button" tabIndex={0} onKeyPress={() => {}} onClick={classes.setFilter}>
      <span className="rating-bar-num">
        {classes.star} ★ 
      </span>
      <FontAwesomeIcon icon="star" size="xs" />
      <span className="rating-bar">
        <RatingBar size={getScale(classes.count, classes.total)} />
      </span>
      <span>
        {classes.count}
      </span>
    </div>
  );
};

export default RatingBarContainer;
