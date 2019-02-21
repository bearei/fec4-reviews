import React from 'react';
import PropTypes from 'prop-types';

const ProductInfo = ({ companyName, productName, itemId }) => (
  <div id="product-info">
    <div className="image">
      <img alt="" src={`https://s3-us-west-1.amazonaws.com/hrei-reviews/item+(${itemId}).jpg`} />
    </div>
    <div className="product-info-text">{`${companyName} - ${productName}`}</div>
  </div>
);

ProductInfo.propTypes = {
  companyName: PropTypes.string,
  productName: PropTypes.string,
  itemId: PropTypes.number,
};

ProductInfo.defaultProps = {
  companyName: '',
  productName: '',
  itemId: 0,
};

export default ProductInfo;
