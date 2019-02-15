import React from 'react';

const UserPurchase = (props) => {
  return (
    <div className="modal-right-el modal-grid">
      <div>
        <h1 className="review-header ">Where did you purchase this product?</h1>
      </div>
      <div>
        <select>
          <option value="select">Select</option>
          <option value="online">Online</option>
          <option value="in-store">In-Store</option>
        </select>
      </div>
    </div>
  );
};

export default UserPurchase;
