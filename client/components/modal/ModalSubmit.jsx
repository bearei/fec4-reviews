import React from 'react';
import PropTypes from 'prop-types';

const ModalSubmit = ({ handleChange, id, value }) => (
  <div>
    <input onChange={() => (value === '' ? handleChange(id, 'check') : handleChange(id, ''))} className="same-line" type="checkbox" />
    <span>
      I agree to the Bazaarvoice
      <span> Terms of Use & Privacy Policy</span>
      *
    </span>
    <div className="email-warning">
      You may recieve emails regarding this submission.  Any
      emails will include the ability to opt out of future communications.
    </div>
    <div role="button" tabIndex={0} className="button-write post-review" onKeyPress={() => {}}>Post review</div>
  </div>
);

ModalSubmit.propTypes = {
  handleChange: PropTypes.func,
  id: PropTypes.number,
  value: PropTypes.node,
};

ModalSubmit.defaultProps = {
  handleChange: () => {},
  id: 0,
  value: '',
};

export default ModalSubmit;
