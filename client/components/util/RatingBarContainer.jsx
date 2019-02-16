import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RatingBar from './RatingBar';

const getScale = (count, total) => (
  Math.floor((count / total * 100))
);

const RatingBarContainer = (props) => {
  const classes = { ...props };
  return (
    <div id="rating-bar-container">
      <span>
        {classes.star}
      </span>
      <FontAwesomeIcon icon="star" size="sm" />
      <span>
        <RatingBar size={getScale(classes.count, classes.total)} />
      </span>
      <span>
        {classes.count}
      </span>
    </div>
  );
};

export default RatingBarContainer;
