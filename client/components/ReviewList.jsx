import React from 'react';
import ReviewListItem from './ReviewListItem';

const ReviewList = (props) => {
  const classes = { ...props };
  return (
    <div>
      <div id="reviews">
        {classes.reviews.map(review => <ReviewListItem review={review} key={review.objectId} />)}
      </div>
    </div>
  );
};

export default ReviewList;
