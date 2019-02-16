import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../util/Stars';
import FitBarContainer from '../util/FitBarContainer';

const Averages = ({ average }) => (
  <div id="averages">
    <h3 className="content-title">Average Customer Rating</h3>
    <div className="fit-body pad-bot">
      <span className="content-title">Overall</span>
      <Stars average={Number.isNaN(average) ? 0 : average} />
      <span className="content-title">{average}</span>
    </div>
    <div className="fit-body pad-top">
      <div className="content-title inline-top">Fit</div>
      <FitBarContainer average={average} />
    </div>
  </div>
);

Averages.propTypes = {
  average: PropTypes.number,
};

Averages.defaultProps = {
  average: 0,
};

export default Averages;
