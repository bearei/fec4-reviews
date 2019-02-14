import React from 'react';
import UserNickname from './UserNickname';
import UserLocation from './UserLocation';

const UserNameAndLoc = (props) => {
  return (
    <div className="modal-right-el modal-grid">
      <UserNickname />
      <UserLocation />
    </div>
  );
};

export default UserNameAndLoc;
