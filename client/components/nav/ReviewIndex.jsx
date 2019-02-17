import React from 'react';
import PropTypes from 'prop-types';

const ReviewIndex = ({ showing, total }) => (
  <div id="review-index">
    <span>{total > 0 ? ' 1 of ' : ' 0 of '}</span>
    {showing < total ? showing : total}
    <span> out of </span>
    {total}
    <span> Reviews</span>
  </div>
);

ReviewIndex.propTypes = {
  showing: PropTypes.number,
  total: PropTypes.number,
};

ReviewIndex.defaultProps = {
  showing: 0,
  total: 0,
};

export default ReviewIndex;
