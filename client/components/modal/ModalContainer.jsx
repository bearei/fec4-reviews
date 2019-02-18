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

const getModal = (id, value, callback, cb2, cb3, hover) => {
  let result;
  if (id === 0) {
    result = (
      <UserProductRating
        id={id}
        value={value}
        hover={hover}
        handleChange={callback}
        onHover={cb2}
        onLeave={cb3}
      />
    );
  } else if (id === 1) {
    result = (
      <UserText
        title={TITLES[1]}
        required
        text
        placeholder={SAMPLES[0]}
        id={id}
        handleChange={callback}
        value={value}
      />
    );
  } else if (id === 2) {
    result = (<UserText value={value} title={TITLES[2]} required text={false} placeholder="" id={id} handleChange={callback} />);
  } else if (id === 3) {
    result = (<UserButton value={value} title={TITLES[3]} id={id} handleChange={callback} />);
  } else if (id === 4) {
    result = (
      <UserText
        title={TITLES[4]}
        required
        text
        placeholder={SAMPLES[1]}
        id={id}
        handleChange={callback}
        value={value}
      />
    );
  } else if (id === 5) {
    result = (
      <UserText
        title={TITLES[5]}
        required
        text
        placeholder={SAMPLES[2]}
        id={id}
        handleChange={callback}
        value={value}
      />
    );
  } else if (id === 6) {
    result = (
      <UserText
        title={TITLES[6]}
        required
        text
        placeholder={SAMPLES[3]}
        id={id}
        handleChange={callback}
        value={value}
      />
    );
  } else if (id === 7) {
    result = (<UserButton value={value} title={TITLES[7]} id={id} handleChange={callback} />);
  } else if (id === 8) {
    result = (<UserButton value={value} title={TITLES[8]} id={id} handleChange={callback} />);
  } else if (id === 9) {
    result = (<UserButton value={value} title={TITLES[9]} id={id} handleChange={callback} />);
  } else if (id === 10) {
    result = (<UserText value={value} title={TITLES[10]} required text={false} placeholder="" id={id} handleChange={callback} />);
  } else if (id === 11) {
    result = (<ModalSubmit value={value} id={id} handleChange={callback} />);
  }
  return result;
};

const ModalContainer = ({
  active, required, submit, hasValue, visited,
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
    {getModal(index, value, changeValue, onHover, onLeave, hover)}
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
  index: PropTypes.number,
  onClick: PropTypes.func,
  changeValue: PropTypes.func,
  value: PropTypes.node,
  onHover: PropTypes.func,
  onLeave: PropTypes.func,
  hover: PropTypes.number,
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
};

export default ModalContainer;
