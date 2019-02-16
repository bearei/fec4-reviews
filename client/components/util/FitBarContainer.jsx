import React from 'react';
import PropTypes from 'prop-types';
import FitBar from './FitBar';

const FitBarContainer = ({ average }) => (
  <div id="fit-bar-container">
    <FitBar average={average} />
    <span className="fit-bar-label">Runs Small</span>
    <span className="fit-bar-label f-right">Runs Large</span>
  </div>
);

FitBarContainer.propTypes = {
  average: PropTypes.number,
};

FitBarContainer.defaultProps = {
  average: 0,
};

export default FitBarContainer;
