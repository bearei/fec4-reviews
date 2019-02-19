import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalHeader = ({ handleClose, companyName, productName }) => (
  <div className="modal-right-el">
    <FontAwesomeIcon onClick={handleClose} className="cancel" icon="times-circle" size="lg" />
    <div className="review-title">
      {`My Review for ${companyName} ${productName}`}
    </div>
    <p className="required">Required fields are marked with *</p>
  </div>
);

ModalHeader.propTypes = {
  handleClose: PropTypes.func,
  companyName: PropTypes.string,
  productName: PropTypes.string,
};

ModalHeader.defaultProps = {
  handleClose: () => {},
  companyName: '',
  productName: '',
};

export default ModalHeader;
