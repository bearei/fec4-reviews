import React from 'react';
import PropTypes from 'prop-types';

const getButton = (title) => {
  let result;
  if (title === 'Would you recommend this product to a friend?') {
    result = (
      <div>
        <div className="button-recommend button-yes">Yes</div>
        <div className="button-recommend button-no">No</div>
      </div>
    );
  } else if (title === 'Fit') {
    result = (
      <div>
        <label htmlFor="1" className="container">
          <input type="radio" name="radio" />
          <span className="checkmark" />
        </label>
        <label htmlFor="2" className="container">
          <input type="radio" name="radio" />
          <span className="checkmark" />
        </label>
        <label htmlFor="3" className="container">
          <input type="radio" name="radio" />
          <span className="checkmark" />
        </label>
        <label htmlFor="4" className="container">
          <input type="radio" name="radio" />
          <span className="checkmark" />
        </label>
        <label htmlFor="5" className="container">
          <input type="radio" name="radio" />
          <span className="checkmark" />
        </label>
        <div>
          <span>Too Small</span>
          <span>Too Large</span>
        </div>
      </div>
    );
  } else if (title === 'Did you read product reviews online before first purchasing this item?') {
    result = (
      <div>
        <select className="select-button">
          <option value="select">Select</option>
          <option value="online">Yes</option>
          <option value="in-store">No</option>
        </select>
      </div>
    );
  } else if (title === 'Where did you purchase this item?') {
    return (
      <div>
        <select className="select-button">
          <option value="select">Select</option>
          <option value="online">Online</option>
          <option value="in-store">In-Store</option>
        </select>
      </div>
    );
  }
  return result;
};

const UserButton = ({ title }) => {
  return (
    <div className="modal-right-el modal-grid">
      <div>
        <h1 className="review-header ">{title}</h1>
      </div>
      {getButton(title)}
    </div>
  );
};


UserButton.propTypes = {
  title: PropTypes.string,
};

UserButton.defaultProps = {
  title: '',
};


export default UserButton;
