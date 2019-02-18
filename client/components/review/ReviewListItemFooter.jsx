import React from 'react';
import PropTypes from 'prop-types';

const ReviewListItemFooter = ({
  helpful, not, flag, id, patch,
}) => (
  <div id="review-list-item-footer">
    <span className="pad-right">Helpful?</span>
    <span onKeyPress={() => {}} role="button" tabIndex={0} onClick={() => patch(id, 'helpful')} className="button-helpful">
      <span>Yes · </span>
      <span>{helpful}</span>
    </span>
    <span onKeyPress={() => {}} role="button" tabIndex={0} onClick={() => patch(id, 'notHelpful')} className="button-helpful">
      <span> No · </span>
      <span>{not}</span>
    </span>
    <span onKeyPress={() => {}} role="button" tabIndex={0} onClick={() => patch(id, 'flag')} className={flag ? '' : 'button-helpful'}>
      <span>{flag ? 'Reported' : 'Report as inappropiate'}</span>
    </span>
  </div>
);

ReviewListItemFooter.propTypes = {
  helpful: PropTypes.number,
  not: PropTypes.number,
  flag: PropTypes.bool,
  id: PropTypes.node,
  patch: PropTypes.func,
};

ReviewListItemFooter.defaultProps = {
  helpful: 0,
  not: 0,
  flag: false,
  id: '',
  patch: () => {},
};

export default ReviewListItemFooter;
