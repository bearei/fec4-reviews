import React from 'react';
import PropTypes from 'prop-types';
import StatusCheck from '../util/StatusCheck';
import UserProductRating from './UserProductRating';
import ModalSubmit from './ModalSubmit';
import UserText from './UserText';
import UserButton from './UserButton';

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
  'Makes hiking even easier',
  'jackie27',
  'Seattle, WA',
  'youremail@example.com',
];
const getModal = (
  index, value, required, visited, changeValue, onHover,
  onLeave, hover, onSubmit,
) => {
  const modals = {
    0: (
      <UserProductRating
        index={index}
        value={value}
        required={required}
        visited={visited}
        hover={hover}
        handleChange={changeValue}
        onHover={onHover}
        onLeave={onLeave}
      />
    ),
    1: (
      <UserText
        title={TITLES[1]}
        visited={visited}
        required={required}
        text
        placeholder={SAMPLES[0]}
        index={index}
        handleChange={changeValue}
        value={value}
      />),
    2: (
      <UserText
        value={value}
        title={TITLES[2]}
        required={required}
        visited={visited}
        text={false}
        placeholder=""
        index={index}
        handleChange={changeValue}
      />),
    3: (
      <UserButton
        required={required}
        visited={visited}
        value={value}
        title={TITLES[3]}
        index={index}
        handleChange={changeValue}
      />),
    4: (
      <UserText
        title={TITLES[4]}
        required={required}
        visited={visited}
        text
        placeholder={SAMPLES[1]}
        index={index}
        handleChange={changeValue}
        value={value}
      />),
    5: (
      <UserText
        title={TITLES[5]}
        required={required}
        visited={visited}
        text
        placeholder={SAMPLES[2]}
        index={index}
        handleChange={changeValue}
        value={value}
      />),
    6: (
      <UserText
        title={TITLES[6]}
        required={required}
        visited={visited}
        text
        placeholder={SAMPLES[3]}
        index={index}
        handleChange={changeValue}
        value={value}
      />),
    7: (
      <UserButton
        required={required}
        visited={visited}
        value={value}
        title={TITLES[7]}
        index={index}
        handleChange={changeValue}
      />),
    8: (
      <UserButton
        required={required}
        visited={visited}
        value={value}
        title={TITLES[8]}
        index={index}
        handleChange={changeValue}
      />),
    9: (
      <UserButton
        value={value}
        title={TITLES[9]}
        required={required}
        visited={visited}
        index={index}
        handleChange={changeValue}
      />),
    10: (
      <UserText
        value={value}
        title={TITLES[10]}
        required={required}
        visited={visited}
        text={false}
        placeholder=""
        index={index}
        handleChange={changeValue}
      />),
    11: (
      <ModalSubmit
        required
        visited={visited}
        onSubmit={onSubmit}
        value={value}
        index={index}
        handleChange={changeValue}
      />),
  };
  return modals[index];
};

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
      {getModal(index, value, required, visited, changeValue, onHover, onLeave, hover, onSubmit)}
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
