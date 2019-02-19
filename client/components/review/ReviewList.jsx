/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import ReviewListItem from './ReviewListItem';

const ReviewList = ({
  reviews, hasMore, handleMore, patch, helpful,
}) => (
  <div id="review-list">
    <div id="reviews">
      {reviews.map((review, index) => (
        <ReviewListItem
          helfulClicked={helpful[index]}
          key={review._id}
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
};

ReviewList.defaultProps = {
  reviews: [],
  hasMore: false,
  handleMore: () => {},
  patch: () => {},
  helpful: [],
};

export default ReviewList;
