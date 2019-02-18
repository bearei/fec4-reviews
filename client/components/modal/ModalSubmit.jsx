import React from 'react';
import PropTypes from 'prop-types';

const ModalSubmit = ({
  handleChange, index, value, onSubmit,
}) => (
  <div>
    <input value={value} onChange={() => (value === 'check' ? handleChange(index, '') : handleChange(index, 'check'))} className="same-line" type="checkbox" />
    <span>
       I agree to the Bazaarvoice
      <span> Terms of Use & Privacy Policy</span>
      *
    </span>
    <div className="email-warning">
      You may recieve emails regarding this submission.  Any
      emails will include the ability to opt out of future communications.
    </div>
    <div onClick={onSubmit} role="button" tabIndex={0} className="button-write post-review" onKeyPress={() => {}}>Post review</div>
  </div>
);

ModalSubmit.propTypes = {
  handleChange: PropTypes.func,
  index: PropTypes.number,
  value: PropTypes.node,
  onSubmit: PropTypes.func,
};

ModalSubmit.defaultProps = {
  handleChange: () => {},
  index: 0,
  value: '',
  onSubmit: () => {},
};

export default ModalSubmit;
