import React from 'react';

const ModalSubmit = (props) => {
  return (
    <div className="modal-right-el">
      <input className="same-line" type="checkbox" />
      <span>
        I agree to the Bazaarvoice
        <span> Terms of Use & Privacy Policy</span>
        *
      </span>
      <p>You may recieve emails regarding this submission.  Any emails will include the ability to opt out of future communications.</p>
      <button>Post review</button>
    </div>
  );
};

export default ModalSubmit;
