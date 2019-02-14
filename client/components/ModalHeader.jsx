import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalHeader = (props) => {
  const classes = { ...props };
  return (
    <div className="modal-right-el">
      <FontAwesomeIcon onClick={classes.handleClose} className="cancel" icon="times-circle" size="lg" />
      <h1 className="review-title">My Review for COMPANY PRODUCT-NAME</h1>
      <p className="required">Required fields are marked with *</p>
    </div>
  );
};

export default ModalHeader;
