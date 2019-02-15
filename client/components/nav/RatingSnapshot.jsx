import React from 'react';
import RatingBarContainer from './RatingBarContainer';

const STARS = [5, 4, 3, 2, 1];

const getCount = (stars, reviews) => (
  reviews.filter(review => review.rating === stars).length
);

const RatingSnapshot = (props) => {
  const classes = { ...props };
  return (
    <div>
      <h1>Rating Snapshot</h1>
      <h2>Select a row below to filter</h2>
      {STARS.map((star, index) => (
        <RatingBarContainer
          star={star}
          key={STARS[index]}
          count={getCount(star, classes.reviews)}
          total={classes.reviews.length}
          onClick={() => classes.setFilter(star)}
        />
      ))
      }
    </div>
  );
};

export default RatingSnapshot;
