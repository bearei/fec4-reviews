import React from 'react';
import PropTypes from 'prop-types';
import FitBar from './FitBar';

const FitBarContainer = ({ average }) => (
  <div id="fit-bar-container">
    <span>Fit</span>
    <FitBar average={average} />
    <p>Runs Small    Runs Large</p>
  </div>
);

FitBarContainer.propTypes = {
  average: PropTypes.number,
};

FitBarContainer.defaultProps = {
  average: 0,
};

export default FitBarContainer;
