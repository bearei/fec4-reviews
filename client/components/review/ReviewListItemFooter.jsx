import React from 'react';
import PropTypes from 'prop-types';

const ReviewListItemFooter = ({ helpful, not, flag }) => (
  <div id="review-list-item-footer">
    <span className="pad-right">Helpful?</span>
    <span className="button-helpful">
      <span>Yes · </span>
      <span>{helpful}</span>
    </span>
    <span className="button-helpful">
      <span> No · </span>
      <span>{not}</span>
    </span>
    <span className={flag ? '' : 'button-helpful'}>
      <span>{flag ? 'Reported' : 'Report as inappropiate'}</span>
    </span>
  </div>
);

ReviewListItemFooter.propTypes = {
  helpful: PropTypes.number,
  not: PropTypes.number,
  flag: PropTypes.bool,
};

ReviewListItemFooter.defaultProps = {
  helpful: 0,
  not: 0,
  flag: false,
};

export default ReviewListItemFooter;
