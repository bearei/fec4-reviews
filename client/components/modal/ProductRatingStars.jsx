import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TEXT = {
  0: 'Click to rate',
  1: 'Poor',
  2: 'Fair',
  3: 'Average',
  4: 'Good',
  5: 'Excellent',
};
const STARS = ['1', '2', '3', '4', '5'];

class ProductRatingStars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      hover: 0,
    };
    this.getClass = this.getClass.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  getClass(star) {
    const { selected, hover } = this.state;
    let result = 'star';
    if (hover > 0) {
      if (hover >= star) {
        result = `star-${TEXT[hover]}`;
      }
    } else if (selected >= star) {
      result = `star-${TEXT[selected]}`;
    }
    return result;
  }

  handleEnter(star) {
    this.setState({ hover: star.star });
  }

  handleLeave() {
    this.setState({ hover: 0 });
  }

  handleClick({ star }) {
    this.setState({ selected: star });
  }

  render() {
    const { selected, hover } = this.state;
    return (
      <div className="modal-right-el">
        <span id="stars">
          <h1 className="review-header same-line">Product Rating*</h1>
          {STARS.map((star, index) => (
            <FontAwesomeIcon
              className={this.getClass(Number(star))}
              color="white"
              onMouseEnter={() => this.handleEnter({ star })}
              onMouseLeave={() => this.handleLeave()}
              onClick={() => this.handleClick({ star })}
              prefix="fas"
              key={TEXT[index]}
              icon="star"
              size="2x"
              id={star}
            />
          ))
            }
          <span id="rating-text">{hover > 0 ? TEXT[hover] : TEXT[selected]}</span>
          <FontAwesomeIcon className={selected > 0 ? 'check-complete' : 'check-default'} icon="check-circle" size="lg" />
        </span>
      </div>
    );
  }
}

export default ProductRatingStars;
