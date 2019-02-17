import React from 'react';
import PropTypes from 'prop-types';

const UserText = ({ title, required, children }) => {
  return (
    <div className="modal-right-el">
      <h1 className="review-header ">{required ? `${title}*` : `${title}`}</h1>
      {children}
    </div>
  );
};

UserText.propTypes = {
  title: PropTypes.string,
  required: PropTypes.bool,
  children: PropTypes.node,
};

UserText.defaultProps = {
  title: '',
  required: false,
  children: '',
};

export default UserText;
