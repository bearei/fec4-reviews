import React from 'react';

const UserEmail = (props) => {
  return (
    <div className="modal-right-el modal-grid">
      <div>
        <h1 className="review-header ">Email*</h1>
        <input className="input-field" type="text" placeholder="Example: youremail@example.com" />
      </div>
    </div>
  );
};

export default UserEmail;
