import React from 'react';
import UserNickname from './UserNickname.jsx';
import UserLocation from './UserLocation.jsx';

const UserNameAndLoc = (props) => {
  return (
    <div className="modal-right-el modal-grid">
      <UserNickname />
      <UserLocation />
    </div>
  );
};

export default UserNameAndLoc;
