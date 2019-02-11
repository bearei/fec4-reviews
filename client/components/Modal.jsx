import React from 'react';

const Modal = (props) => {
  const visibility = props.show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={visibility}>
      <div className='modal-main'>
        <h1>MODAL</h1>
        <p>Form Stuff</p>
        <p>More form stuff</p>
        <button onClick={props.handleClose}> close</button>
      </div>
    </div>
  );
};

export default Modal;
