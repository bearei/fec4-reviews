import React from 'react';
import PropTypes from 'prop-types';

const ModalHeader = ({ handleClose, companyName, productName }) => (
  <div className="modal-right-el">
    <i onClick={handleClose} className="fas fa-times-circle cancel fa-lg"/>
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
