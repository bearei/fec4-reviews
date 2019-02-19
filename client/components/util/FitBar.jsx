import React from 'react';
import PropTypes from 'prop-types';

const FitBar = ({ average }) => (
  <div id="fit-bar" className={average === 0 ? 'hidden' : ''}>
    <div className="fit-bar-block" />
    <div className="fit-bar-block" />
    <div className="divider" />
    <div className="fit-bar-block" />
    <div className="fit-bar-block" />
    <div className="fit-slider" style={{ left: `${(average - 1) * 23}%` }} />
  </div>
);

FitBar.propTypes = {
  average: PropTypes.number,
};

FitBar.defaultProps = {
  average: 0,
};

export default FitBar;
