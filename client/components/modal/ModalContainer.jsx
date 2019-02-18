import React from 'react';
import PropTypes from 'prop-types';
import StatusCheck from '../util/StatusCheck';

const ModalContainer = ({
  active, required, submit, hasValue, visited, children, onClick, changeValue,
}) => (
  <div
    className="modal-right-el modal-container"
    onClick={onClick}
    onKeyPress={() => {}}
    role="button"
    tabIndex={0}
  >
    <div className={active ? 'arrow-container arrow' : 'arrow-container'} />
    {children}
    <StatusCheck
      active={active}
      visited={visited}
      required={required}
      submit={submit}
      hasValue={hasValue}
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
  onClick: PropTypes.func,
  changeValue: PropTypes.func,
};

ModalContainer.defaultProps = {
  active: false,
  required: false,
  submit: false,
  hasValue: false,
  visited: false,
  children: '',
  onClick: () => {},
  changeValue: () => {},
};

export default ModalContainer;
