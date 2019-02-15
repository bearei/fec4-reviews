import React from 'react';

const UserRecommend = (props) => {
  return (
    <div className="modal-right-el modal-grid">
      <div>
        <h1 className="review-header ">Would you recommend this product to a friend?</h1>
      </div>
      <ul>
        <li className="button-recommend">Yes</li>
        <li className="button-recommend">No</li>
      </ul>
    </div>
  );
};

export default UserRecommend;
