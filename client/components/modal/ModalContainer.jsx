import React from 'react';
import PropTypes from 'prop-types';
import StatusCheck from '../util/StatusCheck';
import ModalComponent from './ModalComponent';

const TITLES = [
  'Product Rating',
  'Review title',
  'Review',
  'Would you recommend this product to a friend?',
  'Nickname',
  'Location',
  'Email',
  'Fit',
  'Did you read product reviews online before first purchasing this item?',
  'Where did you purchase this item?',
  'What feedback do you have for the people who designed and manufactured this product?',
  'Submit',
];

const SAMPLES = [
  '',
  'Makes hiking even easier',
  '',
  '',
  'jackie27',
  'Seattle, WA',
  'youremail@example.com',
  '',
  '',
  '',
  '',
  '',
];

const TAGS = [
  'rating', 'text', 'text', 'button', 'text',
  'text', 'text', 'button', 'button', 'button',
  'text', 'submit',
];

const TEXTAREA = [
  true, true, false, true, true, true,
  true, true, true, true, false, true,
];

const ModalContainer = ({
  active, required, submit, hasValue, visited, onSubmit,
  index, onClick, changeValue, value, onHover, onLeave, hover,
}) => (
  <div
    className="modal-right-el modal-container"
    onClick={onClick}
    onKeyPress={() => {}}
    role="button"
    tabIndex={0}
  >
    <div className={active ? 'arrow-container arrow' : 'arrow-container'} />
    <div className="modal-wrapper">
      <ModalComponent
        tag={TAGS[index]}
        title={TITLES[index]}
        index={index}
        value={value}
        required={required}
        visited={visited}
        handleChange={changeValue}
        onHover={onHover}
        onLeave={onLeave}
        hover={hover}
        onSubmit={onSubmit}
        hasValue={hasValue}
        text={TEXTAREA[index]}
        placeholder={SAMPLES[index]}
      />

      <StatusCheck
        active={active}
        visited={visited}
        required={required}
        submit={submit}
        hasValue={hasValue}
      />
    </div>
  </div>
);

ModalContainer.propTypes = {
  active: PropTypes.bool,
  required: PropTypes.bool,
  submit: PropTypes.bool,
  hasValue: PropTypes.bool,
  visited: PropTypes.bool,
  index: PropTypes.number,
  onClick: PropTypes.func,
  changeValue: PropTypes.func,
  value: PropTypes.node,
  onHover: PropTypes.func,
  onLeave: PropTypes.func,
  hover: PropTypes.number,
  onSubmit: PropTypes.func,
};

ModalContainer.defaultProps = {
  active: false,
  required: false,
  submit: false,
  hasValue: false,
  visited: false,
  index: 0,
  onClick: () => {},
  changeValue: () => {},
  value: '',
  onHover: () => {},
  onLeave: () => {},
  hover: 0,
  onSubmit: () => {},
};

export default ModalContainer;
