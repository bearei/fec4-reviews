import React from 'react';
import PropTypes from 'prop-types';
import UserProductRating from './UserProductRating';
import ModalSubmit from './ModalSubmit';
import UserText from './UserText';
import UserButton from './UserButton';

const components = {
  rating: UserProductRating,
  submit: ModalSubmit,
  text: UserText,
  button: UserButton,
};

const ModalComponent = ({ tag, ...rest }) => {
  const TagName = components[tag];
  return (
    <TagName {...rest} />
  );
};

ModalComponent.propTypes = {
  tag: PropTypes.string,
};

ModalComponent.defaultProps = {
  tag: '',
};

export default ModalComponent;
