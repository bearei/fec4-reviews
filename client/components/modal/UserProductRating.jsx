import React from 'react';
import PropTypes from 'prop-types';

const TEXT = {
  0: 'Click to rate',
  1: 'Poor',
  2: 'Fair',
  3: 'Average',
  4: 'Good',
  5: 'Excellent',
};
const STARS = ['1', '2', '3', '4', '5'];

const getClass = (star, selected, hover) => {
  let result = `rating-star rating-star-${star}`;
  if (hover > 0) {
    if (hover >= star) {
      result = `rating-star rating-star-${star} star-${TEXT[hover]}`;
    }
  } else if (selected >= star) {
    result = `rating-star rating-${star}-star star-${TEXT[selected]}`;
  }
  return result;
};

const UserProductRating = ({
  value, hover, handleChange, id, onHover, onLeave,
}) => (
  <div>
    <h1 className="review-header same-line pad-right">Product Rating*</h1>
    {STARS.map((star, index) => (
      <div
        className={getClass(star, value, hover)}
        role="button"
        onMouseEnter={() => onHover(star)}
        onMouseLeave={onLeave}
        onClick={() => handleChange(id, star)}
        key={TEXT[index]}
        tabIndex={0}
        onKeyPress={() => {}}
        id={star}
      >
        ★
      </div>
    ))
      }
    <span id="rating-text">
      {hover === 0 && value === '' ? TEXT[0] : ''}
      {hover > 0 ? TEXT[hover] : TEXT[value]}
    </span>
  </div>
);

UserProductRating.propTypes = {
  handleChange: PropTypes.func,
  id: PropTypes.number,
  hover: PropTypes.number,
  value: PropTypes.node,
  onHover: PropTypes.func,
  onLeave: PropTypes.func,
};

UserProductRating.defaultProps = {
  handleChange: () => {},
  id: 0,
  value: '',
  hover: 0,
  onHover: () => {},
  onLeave: () => {},
};


export default UserProductRating;
