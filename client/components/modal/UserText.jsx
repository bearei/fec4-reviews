/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';

const getText = (placeholder, handleChange, id, value) => (
  <input className="input-field" onChange={() => handleChange(id, event.target.value)} value={value} type="text" placeholder={`Example: ${placeholder}`} />
);

const getTextArea = (handleChange, id, value) => (
  <textarea className="input-field" rows="4" onChange={() => handleChange(id, event.target.value)} value={value} />
);

const UserText = ({
  title, required, text, placeholder, handleChange, id, value,
}) => (
  <div>
    <h1 className="review-header ">{required ? `${title}*` : `${title}`}</h1>
    {text ? getText(placeholder, handleChange, id, value) : getTextArea(handleChange, id, value)}
  </div>
);

UserText.propTypes = {
  title: PropTypes.string,
  required: PropTypes.bool,
  text: PropTypes.bool,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  id: PropTypes.number,
  value: PropTypes.node,
};

UserText.defaultProps = {
  title: '',
  required: false,
  text: '',
  placeholder: '',
  handleChange: () => {},
  id: 0,
  value: '',
};

export default UserText;
