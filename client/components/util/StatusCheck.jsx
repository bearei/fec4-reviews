import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getClass = (active, required, submit, hasValue, visited) => {
  let result = 'hidden';
  if (active || (visited && required)) {
    result = 'check-gray';
  } else if (hasValue || (submit && !required)) {
    result = 'check-green';
  } else if ((submit && required) || (visited && required)) {
    result = 'check-red';
  }
  return result;
};

const StatusCheck = ({
  active, required, submit, hasValue, visited,
}) => {
  const name = getClass(active, required, submit, hasValue, visited);
  return (
    <div className={`status-check ${name}`}>
      <div className={name === 'check-red' ? 'required-text' : 'hidden'}>Required</div>
      <FontAwesomeIcon
        className={`icon ${name}`}
        icon="check-circle"
        size="lg"
      />
    </div>
  );
};

StatusCheck.propTypes = {
  active: PropTypes.bool,
  required: PropTypes.bool,
  submit: PropTypes.bool,
  hasValue: PropTypes.bool,
  visited: PropTypes.bool,
};

StatusCheck.defaultProps = {
  active: false,
  required: false,
  submit: false,
  hasValue: false,
  visited: false,
};

export default StatusCheck;
