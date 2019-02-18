import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalHeader = ({ handleClose }) => (
  <div className="modal-right-el">
    <FontAwesomeIcon onClick={handleClose} className="cancel" icon="times-circle" size="lg" />
    <div className="review-title">My Review for COMPANY PRODUCT-NAME</div>
    <p className="required">Required fields are marked with *</p>
  </div>
);

ModalHeader.propTypes = {
  handleClose: PropTypes.func,
};

ModalHeader.defaultProps = {
  handleClose: () => {},
};

export default ModalHeader;
