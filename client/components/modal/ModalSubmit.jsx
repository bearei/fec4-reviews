import React from 'react';
import PropTypes from 'prop-types';

const ModalSubmit = ({
  handleChange, index, value, onSubmit, required, visited, hasValue,
}) => (
  <div id="modal-submit">
    <input checked={value !== ''} onChange={() => (value === 'check' ? handleChange(index, '') : handleChange(index, 'check'))} className="same-line" type="checkbox" />
    <span className={required && visited && !hasValue ? 'required-header ' : ''}>
       I agree to the Bazaarvoice
    </span>
    <span> Terms of Use & Privacy Policy</span>
    <span className={required && visited ? 'required-header ' : ''}>
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
  required: PropTypes.bool,
  visited: PropTypes.bool,
  hasValue: PropTypes.bool,
};

ModalSubmit.defaultProps = {
  handleChange: () => {},
  index: 0,
  value: '',
  onSubmit: () => {},
  required: false,
  visited: false,
  hasValue: false,
};

export default ModalSubmit;
