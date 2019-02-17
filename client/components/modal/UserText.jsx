import React from 'react';
import PropTypes from 'prop-types';

const getText = placeholder => (
  <input className="input-field" type="text" placeholder={`Example: ${placeholder}`} />
);

const getTextArea = () => (
  <textarea className="input-field" rows="4" />
);

const UserText = ({
  title, required, text, placeholder,
}) => (
  <div>
    <h1 className="review-header ">{required ? `${title}*` : `${title}`}</h1>
    {text ? getText(placeholder) : getTextArea()}
  </div>
);

UserText.propTypes = {
  title: PropTypes.string,
  required: PropTypes.bool,
  text: PropTypes.bool,
  placeholder: PropTypes.string,
};

UserText.defaultProps = {
  title: '',
  required: false,
  text: '',
  placeholder: '',
};

export default UserText;
