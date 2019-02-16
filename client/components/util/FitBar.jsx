import React from 'react';
import PropTypes from 'prop-types';

const FitBar = ({ average }) => (
  <div id="fit-bar">
    <div className="fit-bar-block" />
    <div className="fit-bar-block" />
    <div className="divider" />
    <div className="fit-bar-block" />
    <div className="fit-bar-block" />
    <div className="fit-slider" style={{ left: `${average * 20}%` }} />
  </div>
);

FitBar.propTypes = {
  average: PropTypes.number,
};

FitBar.defaultProps = {
  average: 0,
};

export default FitBar;
