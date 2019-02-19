import React from 'react';
import PropTypes from 'prop-types';
import RatingBarContainer from '../util/RatingBarContainer';

const STARS = [5, 4, 3, 2, 1];

const getCount = (stars, reviews) => (
  reviews.filter(review => review.rating === stars).length
);

const RatingSnapshot = ({ setFilter, reviews }) => (
  <div>
    <h3 className="content-title">Rating Snapshot</h3>
    <span className="hist-title">Select a row below to filter</span>
    {STARS.map((star, index) => (
      <RatingBarContainer
        setFilter={() => setFilter(star)}
        star={star}
        key={STARS[index]}
        count={getCount(star, reviews)}
        total={reviews.length}
      />
    ))
    }
  </div>
);

RatingSnapshot.propTypes = {
  setFilter: PropTypes.func,
  reviews: PropTypes.instanceOf(Array),
};

RatingSnapshot.defaultProps = {
  setFilter: () => {},
  reviews: [],
};

export default RatingSnapshot;
