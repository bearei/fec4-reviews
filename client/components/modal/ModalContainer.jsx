import React from 'react';
import PropTypes from 'prop-types';
import StatusCheck from '../util/StatusCheck';

const ModalContainer = ({
  active, required, submit, hasValue, visited, children,
}) => (
  <div className="modal-right-el modal-container">
    <div className={active ? 'arrow-container arrow' : 'arrow-container'} />
    {children}
    <StatusCheck
      active={active}
      required={required}
      submit={submit}
      hasValue={hasValue}
      visited={visited}
    />
  </div>
);

ModalContainer.propTypes = {
  active: PropTypes.bool,
  required: PropTypes.bool,
  submit: PropTypes.bool,
  hasValue: PropTypes.bool,
  visited: PropTypes.bool,
  children: PropTypes.node,
};

ModalContainer.defaultProps = {
  active: false,
  required: false,
  submit: false,
  hasValue: false,
  visited: false,
  children: '',
};

export default ModalContainer;
