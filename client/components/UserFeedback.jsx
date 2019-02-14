import React from 'react';

const UserFeedback = (props) => {
  return (
    <div className="modal-right-el">
      <h1 className="review-header ">What feedback do you have for the people who designed and manufactred this product?</h1>
      <textarea className="input-field" rows="4" />
    </div>
  );
};

export default UserFeedback;
