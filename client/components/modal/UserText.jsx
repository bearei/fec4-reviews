/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';

const getText = (placeholder, handleChange, index, value, required, visited, hasValue) => (
  <input className={required && visited && !hasValue ? 'required-border input-field' : 'input-field'} onChange={() => handleChange(index, event.target.value)} value={value} type="text" placeholder={`Example: ${placeholder}`} />
);

const getTextArea = (handleChange, index, value, required, visited, hasValue) => (
  <textarea className={required && visited && !hasValue ? 'required-border input-field' : 'input-field'} rows="4" onChange={() => handleChange(index, event.target.value)} value={value} />
);

const UserText = ({
  title, required, text, placeholder, handleChange, index, value, visited, hasValue,
}) => (
  <div>
    <h1 className={required && visited && !hasValue ? 'required-header review-header' : 'review-header'}>{required ? `${title}*` : `${title}`}</h1>
    {text
      ? getText(placeholder, handleChange, index, value, required, visited, hasValue)
      : getTextArea(handleChange, index, value, required, visited, hasValue)}
  </div>
);

UserText.propTypes = {
  title: PropTypes.string,
  required: PropTypes.bool,
  visited: PropTypes.bool,
  text: PropTypes.bool,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  index: PropTypes.number,
  value: PropTypes.node,
  hasValue: PropTypes.bool,
};

UserText.defaultProps = {
  title: '',
  required: false,
  visited: false,
  text: '',
  placeholder: '',
  handleChange: () => {},
  index: 0,
  value: '',
  hasValue: false,
};

export default UserText;
