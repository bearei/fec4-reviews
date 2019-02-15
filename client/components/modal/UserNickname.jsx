import React from 'react';

const UserNickname = (props) => {
  return (
    <div id="user-nickname">
      <h1 className="review-header ">Nickname*</h1>
      <input className="input-field" type="text" placeholder="Example: jackie27" />
    </div>
  );
};

export default UserNickname;
