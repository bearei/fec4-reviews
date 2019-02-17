import React from 'react';
import PropTypes from 'prop-types';

const UserReview = ({ title, required }) => {
  return (
    <div className="modal-right-el">
      <h1 className="review-header ">{required ? `${title}*` : `${title}`}</h1>
      <textarea className="input-field" rows="4" />
    </div>
  );
};

UserReview.propTypes = {
  title: PropTypes.string,
  required: PropTypes.bool,
};

UserReview.defaultProps = {
  title: '',
  required: false,
};


export default UserReview;
