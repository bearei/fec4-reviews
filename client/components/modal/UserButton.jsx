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

const getButton = (title, handleChange, index, value) => {
  let result;
  if (title === TITLES[0]) {
    result = (
      <div className="margin-left">
        <div role="button" tabIndex={0} onKeyPress={() => {}} onClick={() => handleChange(index, 'yes')} className={value === 'yes' ? 'button-recommend button-yes  button-select' : 'button-normal button-recommend button-yes'}>Yes</div>
        <div role="button" tabIndex={0} onKeyPress={() => {}} onClick={() => handleChange(index, 'no')} className={value === 'no' ? 'button-recommend button-no button-select' : 'button-recommend button-no button-normal'}>No</div>
      </div>
    );
  } else if (title === TITLES[1]) {
    result = (
      <div className="margin-left">
        {numbers.map((number, ind) => (
          <div
            role="button"
            tabIndex={0}
            onKeyPress={() => {}}
            onClick={() => handleChange(index, number)}
            htmlFor={number}
            className={number === value ? 'container selected' : 'container'}
            key={numbers[ind]}
          >
            <span className={number !== value ? 'checkmark-after' : 'checkmark'} />
          </div>
        ))
        }
        <div className="fit-text">
          <span>Too Small</span>
          <span className="f-right">Too Large</span>
        </div>
      </div>
    );
  } else if (title === TITLES[2]) {
    result = (
      <div className="margin-left">
        <select role="button" tabIndex={0} onKeyPress={() => {}} onChange={() => handleChange(index, event.target.value)} className="select-button">
          <option value="select">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    );
  } else if (title === TITLES[3]) {
    return (
      <div className="margin-left">
        <select role="button" tabIndex={0} onKeyPress={() => {}} onChange={() => handleChange(index, event.target.value)} className="select-button">
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
  title, handleChange, index, value,
}) => (
  <div className="modal-grid">
    <span>
      <h1 className="review-header ">{title}</h1>
    </span>
    {getButton(title, handleChange, index, value)}
  </div>
);

UserButton.propTypes = {
  title: PropTypes.string,
  handleChange: PropTypes.func,
  index: PropTypes.number,
  value: PropTypes.node,
};

UserButton.defaultProps = {
  title: '',
  handleChange: () => {},
  index: 0,
  value: '',
};


export default UserButton;
