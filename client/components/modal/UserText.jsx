/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';

const getText = (placeholder, handleChange, index, value, required, visited) => (
  <input className={required && visited ? 'required-border input-field' : 'input-field'} onChange={() => handleChange(index, event.target.value)} value={value} type="text" placeholder={`Example: ${placeholder}`} />
);

const getTextArea = (handleChange, index, value, required, visited) => (
  <textarea className={required && visited ? 'required-border input-field' : 'input-field'} rows="4" onChange={() => handleChange(index, event.target.value)} value={value} />
);

const UserText = ({
  title, required, text, placeholder, handleChange, index, value, visited,
}) => (
  <div>
    <h1 className={required && visited ? 'required-header review-header' : 'review-header'}>{required ? `${title}*` : `${title}`}</h1>
    {text
      ? getText(placeholder, handleChange, index, value, required, visited)
      : getTextArea(handleChange, index, value, required, visited)}
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
};

export default UserText;
