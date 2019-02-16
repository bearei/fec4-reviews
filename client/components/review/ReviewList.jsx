/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReviewListItem from './ReviewListItem';

const ReviewList = (props) => {
  const classes = { ...props };
  return (
    <div id="review-list">
      <div id="reviews">
        {classes.reviews.map(review => <ReviewListItem key={review._id} review={review} />)}
        <div
          className={classes.hasMore ? 'button-helpful button-load-more' : 'hidden'}
          onClick={classes.handleMore}
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
        >
          Load More Posts
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
