import React from 'react';
import PropTypes from 'prop-types';

const UserButton = ({ title, children }) => {
  return (
    <div className="modal-right-el modal-grid">
      <div>
        <h1 className="review-header ">{title}</h1>
      </div>
      {children}
    </div>
  );
};

UserButton.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

UserButton.defaultProps = {
  title: '',
  children: '',
};


export default UserButton;
