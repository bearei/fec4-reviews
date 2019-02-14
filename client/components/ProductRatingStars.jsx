import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { darkWhite } from 'material-ui/styles/colors';

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
    const classes = { ...this.state };
    let result = 'star';
    if (classes.hover > 0) {
      if (classes.hover >= star) {
        result = `star-${TEXT[classes.hover]}`;
      }
    } else if (classes.selected >= star) {
      result = `star-${TEXT[classes.selected]}`;
    }
    return result;
  }

  handleEnter(star) {
    this.setState({ hover: star.star });
    console.log(`Enter, ${star.star}, ${TEXT[star.star]}`);
  }

  handleLeave(star) {
    this.setState({ hover: 0 });
    console.log(`Leave, ${star.star}, ${TEXT[star.star]}`);
  }

  handleClick(star) {
    this.setState({ selected: star.star });
    console.log(`Click, ${star.star}, ${TEXT[star.star]}`);
  }

  render() {
    const classes = { ...this.state };
    return (
      <div className="modal-right-el">
        <span id="stars">
          <h1 className="review-header same-line">Product Rating*</h1>
          {STARS.map(star => (
            <FontAwesomeIcon
              className={this.getClass(Number(star))}
              color={darkWhite}
              onMouseEnter={() => this.handleEnter({ star })}
              onMouseLeave={() => this.handleLeave({ star })}
              onClick={() => this.handleClick({ star })}
              prefix="fas"
              key={classes.key}
              icon="star"
              size="2x"
              id={star}
            />
          ))
            }
          <span id="rating-text">{classes.hover > 0 ? TEXT[classes.hover] : TEXT[classes.selected]}</span>
          <FontAwesomeIcon className={classes.selected > 0 ? 'check-complete' : 'check-default'} icon="check-circle" size="lg" />
        </span>
      </div>
    );
  }
}

export default ProductRatingStars;
