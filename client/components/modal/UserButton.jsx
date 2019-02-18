/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';

const TITLES = [
  'Would you recommend this product to a friend?',
  'Fit',
  'Did you read product reviews online before first purchasing this item?',
  'Where did you purchase this item?',
];

const numbers = Array.from({ length: 5 }, (v, k) => (k + 1).toString());

const getButton = (title, handleChange, id, value) => {
  let result;
  if (title === TITLES[0]) {
    result = (
      <div className="margin-left">
        <div role="button" tabIndex={0} onKeyPress={() => {}} onClick={() => handleChange(id, 'yes')} className={value === 'yes' ? 'button-recommend button-yes  button-select' : 'button-normal button-recommend button-yes'}>Yes</div>
        <div role="button" tabIndex={0} onKeyPress={() => {}} onClick={() => handleChange(id, 'no')} className={value === 'no' ? 'button-recommend button-no button-select' : 'button-recommend button-no button-normal'}>No</div>
      </div>
    );
  } else if (title === TITLES[1]) {
    result = (
      <div className="margin-left">
        {numbers.map((number, index) => (
          <label onKeyPress={() => {}} onClick={() => handleChange(id, number)} htmlFor={number} className="container" key={numbers[index]}>
            <input type="radio" value={number} name="radio" />
            <span className="checkmark" />
          </label>
        ))
        }
        <div>
          <span>Too Small</span>
          <span>Too Large</span>
        </div>
      </div>
    );
  } else if (title === TITLES[2]) {
    result = (
      <div className="margin-left">
        <select role="button" tabIndex={0} onKeyPress={() => {}} onChange={() => handleChange(id, event.target.value)} className="select-button">
          <option value="select">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    );
  } else if (title === TITLES[3]) {
    return (
      <div className="margin-left">
        <select role="button" tabIndex={0} onKeyPress={() => {}} onChange={() => handleChange(id, event.target.value)} className="select-button">
          <option value="select">Select</option>
          <option value="online">Online</option>
          <option value="in-store">In-Store</option>
        </select>
      </div>
    );
  }
  return result;
};

const UserButton = ({
  title, handleChange, id, value,
}) => (
  <div className="modal-grid">
    <span>
      <h1 className="review-header ">{title}</h1>
    </span>
    {getButton(title, handleChange, id, value)}
  </div>
);

UserButton.propTypes = {
  title: PropTypes.string,
  handleChange: PropTypes.func,
  id: PropTypes.number,
  value: PropTypes.node,
};

UserButton.defaultProps = {
  title: '',
  handleChange: () => {},
  id: 0,
  value: '',
};


export default UserButton;
