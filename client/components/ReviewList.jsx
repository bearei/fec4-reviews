import React from 'react';
import ReviewListItem from './ReviewListItem';

const ReviewList = (props) => {
  const classes = { ...props };
  return (
    <div>
      <div id="reviews">
        {classes.reviews.map(review => <ReviewListItem key={review._id} review={review} />)}
      </div>
    </div>
  );
};

export default ReviewList;
