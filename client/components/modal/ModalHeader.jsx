import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalHeader = ({ handleClose }) => {
  return (
    <div className="modal-right-el">
      <FontAwesomeIcon onClick={handleClose} className="cancel" icon="times-circle" size="lg" />
      <h1 className="review-title">My Review for COMPANY PRODUCT-NAME</h1>
      <p className="required">Required fields are marked with *</p>
    </div>
  );
};

ModalHeader.propTypes = {
  handleClose: PropTypes.func,
};

ModalHeader.defaultProps = {
  handleClose: () => {},
};

export default ModalHeader;
