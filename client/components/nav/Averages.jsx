import React from 'react';
import PropTypes from 'prop-types';
import AveragesStars from './AveragesStars';
import FitBarContainer from '../util/FitBarContainer';

const Averages = ({ average }) => (
  <div id="averages">
    <h3 className="content-title">Average Customer Rating</h3>
    <AveragesStars average={Number.isNaN(average) ? 0 : average} />
    <FitBarContainer average={average} />
  </div>
);

Averages.propTypes = {
  average: PropTypes.number,
};

Averages.defaultProps = {
  average: 0,
};

export default Averages;
