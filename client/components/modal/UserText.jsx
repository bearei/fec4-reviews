/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';

const getText = (placeholder, handleChange, index, value) => (
  <input className="input-field" onChange={() => handleChange(index, event.target.value)} value={value} type="text" placeholder={`Example: ${placeholder}`} />
);

const getTextArea = (handleChange, index, value) => (
  <textarea className="input-field" rows="4" onChange={() => handleChange(index, event.target.value)} value={value} />
);

const UserText = ({
  title, required, text, placeholder, handleChange, index, value,
}) => (
  <div>
    <h1 className="review-header ">{required ? `${title}*` : `${title}`}</h1>
    {text
      ? getText(placeholder, handleChange, index, value)
      : getTextArea(handleChange, index, value)}
  </div>
);

UserText.propTypes = {
  title: PropTypes.string,
  required: PropTypes.bool,
  text: PropTypes.bool,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  index: PropTypes.number,
  value: PropTypes.node,
};

UserText.defaultProps = {
  title: '',
  required: false,
  text: '',
  placeholder: '',
  handleChange: () => {},
  index: 0,
  value: '',
};

export default UserText;
