/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import ReviewListItem from './ReviewListItem';

const ReviewList = ({
  reviews, hasMore, handleMore, patch, helpful, flagged,
}) => (
  <div id="review-list">
    <div id="reviews">
      {reviews.map((review, index) => (
        <ReviewListItem
          helpfulClicked={helpful[index]}
          flagged={flagged[index]}
          key={review.reviewId}
          review={review}
          patch={patch}
        />
      ))
      }
      <div
        className={hasMore ? 'button-helpful button-load-more' : 'hidden'}
        onClick={handleMore}
        onKeyPress={() => {}}
        role="button"
        tabIndex={0}
      >
        Load More Posts
      </div>
    </div>
  </div>
);

ReviewList.propTypes = {
  reviews: PropTypes.instanceOf(Array),
  hasMore: PropTypes.bool,
  handleMore: PropTypes.func,
  patch: PropTypes.func,
  helpful: PropTypes.instanceOf(Array),
  flagged: PropTypes.instanceOf(Array),
};

ReviewList.defaultProps = {
  reviews: [],
  hasMore: false,
  handleMore: () => {},
  patch: () => {},
  helpful: [],
  flagged: [],
};

export default ReviewList;
