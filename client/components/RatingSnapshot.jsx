import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RatingSnapshot = (props) => {
  const classes = { ...props };
  return (
    <div id="snapshot">
      <h1>Rating Snapshot</h1>
      <h2>Select a row below to filter</h2>
      <h3>5 * * * - -</h3>
      <h3>4 * - - - -</h3>
      <h3>3 - - - - -</h3>
      <h3>2 - - - - -</h3>
      <h3>1 * - - - -</h3>
      <h2>1 - 2 of 2 Reviews</h2>
    </div>
  );
};

export default RatingSnapshot;
