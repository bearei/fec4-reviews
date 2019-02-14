import React from 'react';

const UserReadReview = (props) => {
  return (
    <div className="modal-right-el modal-grid">
      <div>
        <h1 className="review-header ">Did you read product reviews online before first purchasing this item?</h1>
      </div>
      <div>
        <select>
          <option value="select">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>
  );
};

export default UserReadReview;
