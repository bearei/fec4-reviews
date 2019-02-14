import React from 'react';

const getClass = (number) => {
  let result = 'fit-border ';
  if (number % 50 === 1) {
    result += 'fit-border fit-border-left';
  } else if (number % 50 === 0 || number % 25 === 0) {
    result += 'fit-border fit-border-right';
  }
  return result;
};

const AveragesFitBar = (props) => {
  const classes = { ...props };
  const numbers = Array.from({ length: 100 }, (v, k) => k + 1);
  return (
    <span>
      {numbers.map(number => <div className={getClass(number)} />)}
    </span>
  );
};

export default AveragesFitBar;
