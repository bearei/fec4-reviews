import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

const ReviewList = (props) => {
  const classes = { ...props };
  return (
    <div>
      <div id="reviews">
        <h1>------------------------------</h1>
        {classes.reviews.map(review => <ReviewListItem review={review} key={review.key} />)}
      </div>
    </div>
  );
};

export default ReviewList;
