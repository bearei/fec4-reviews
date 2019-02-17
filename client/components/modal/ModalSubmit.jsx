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
      <p>
        You may recieve emails regarding this submission.  Any
        emails will include the ability to opt out of future communications.
      </p>
      <div role="button" tabIndex={0} className="button-write pad-left" onKeyPress={() => {}}>Post review</div>
    </div>
  );
};

export default ModalSubmit;
