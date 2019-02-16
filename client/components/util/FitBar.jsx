import React from 'react';
import PropTypes from 'prop-types';

const getClass = (number, average) => {
  let result = 'fit-border ';
  if (number <= 11 && (average - 1) * 25 <= 11) {
    result = 'fit-slider';
  } else if (number >= 90 && (average - 1) * 25 >= 90) {
    result = 'fit-slider';
  } else if (Math.abs(number - ((average - 1) * 25)) <= 5) {
    result = 'fit-slider';
  } else if (number % 50 === 1) {
    result += 'fit-border fit-border-left';
  } else if (number % 50 === 0 || number % 25 === 0) {
    result += 'fit-border fit-border-right';
  }
  return result;
};

const numbers = Array.from({ length: 100 }, (v, k) => k + 1);

// {numbers.map((number, index) => (
//   <div
//     key={numbers[index]}
//     className={getClass(number, average)}
//   />
// ))
// }
const FitBar = ({ average }) => (
  <span id="fit-bar">
    <div className="fit-bar-block" />
    <div className="fit-bar-block" />
    <div className="divider" />
    <div className="fit-bar-block" />
    <div className="fit-bar-block" />
  </span>
);

FitBar.propTypes = {
  average: PropTypes.number,
};

FitBar.defaultProps = {
  average: 0,
};

export default FitBar;
