import React from 'react';

const UserFit = (props) => {
  return (
    <div className="modal-right-el modal-grid">
      <div>
        <h1 className="review-header ">Fit</h1>
      </div>
      <div>
        <input type="radio" name="fitbuttons" id="1" value="1" />
        <input type="radio" name="fitbuttons" id="2" value="2" />
        <input type="radio" name="fitbuttons" id="3" value="3" />
        <input type="radio" name="fitbuttons" id="4" value="4" />
        <input type="radio" name="fitbuttons" id="5" value="5" />
        <p>Runs Small   Too Large</p>
      </div>
    </div>
  );
};

export default UserFit;
