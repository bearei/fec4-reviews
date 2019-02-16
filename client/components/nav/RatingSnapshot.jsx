import React from 'react';
import RatingBarContainer from '../util/RatingBarContainer';

const STARS = [5, 4, 3, 2, 1];

const getCount = (stars, reviews) => (
  reviews.filter(review => review.rating === stars).length
);

const RatingSnapshot = (props) => {
  const classes = { ...props };
  return (
    <div>
      <h3 className="content-title">Rating Snapshot</h3>
      <span className="hist-title">Select a row below to filter</span>
      {STARS.map((star, index) => (
        <RatingBarContainer
          setFilter={() => classes.setFilter(star)}
          star={star}
          key={STARS[index]}
          count={getCount(star, classes.reviews)}
          total={classes.reviews.length}
        />
      ))
      }
    </div>
  );
};

export default RatingSnapshot;
