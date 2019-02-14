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

class ProductRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textVal: '0',
      selected: '0',
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleEnter(id) {
    console.log("Enter", id);
  }

  handleLeave(id) {
    console.log("LEAVE", id);
  }

  handleClick(id) {
    console.log("CLICK", id);
  }

  render() {
    const classes = { ...this.state };
    return (
      <span>
        {STARS.map(item => (
          <FontAwesomeIcon
            className="star"
            onMouseEnter={() => this.handleEnter({ item })}
            onMouseLeave={() => this.handleLeave({ item })}
            onClick={() => this.handleClick({ item })}
            prefix="fas"
            key={classes.key}
            icon="star"
            size="lg"
            id={item}
          />
        ))
          }
        <span id="rating-text">{TEXT[classes.textVal]}</span>
        <FontAwesomeIcon icon="check-circle" />
      </span>
    );
  }
}

export default ProductRating;