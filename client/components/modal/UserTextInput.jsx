import React from 'react';
import PropTypes from 'prop-types';

const UserTextInput = ({ title, placeholder, required }) => {
  return (
    <div className="modal-right-el">
      <h1 className="review-header ">{required ? `${title}*` : `${title}`}</h1>
      <input className="input-field" type="text" placeholder={`Example: ${placeholder}`} />
    </div>
  );
};

UserTextInput.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

UserTextInput.defaultProps = {
  title: '',
  placeholder: '',
  required: false,
};

export default UserTextInput;
