import React from 'react';
import PropTypes from 'prop-types';
import RatingBar from './RatingBar';

const getScale = (count, total) => (
  Math.floor((count / total * 100))
);

const RatingBarContainer = ({
  setFilter, star, count, total,
}) => (
  <div id="rating-bar-container">
    <span role="button" tabIndex={0} onKeyPress={() => {}} onClick={count > 0 ? setFilter : () => {}}>
      <span className="rating-bar-num">
        {`${star} ★ `}
      </span>
      <RatingBar size={getScale(count, total)} />
      <span>
        {count}
      </span>
    </span>
  </div>
);

RatingBarContainer.propTypes = {
  setFilter: PropTypes.func,
  star: PropTypes.number,
  count: PropTypes.number,
  total: PropTypes.number,
};

RatingBarContainer.defaultProps = {
  setFilter: () => {},
  star: 0,
  count: 0,
  total: 0,
};

export default RatingBarContainer;
