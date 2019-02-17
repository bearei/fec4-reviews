import React, { Component } from 'react';
import StatusCheck from '../util/StatusCheck';

const TEXT = {
  0: 'Click to rate',
  1: 'Poor',
  2: 'Fair',
  3: 'Average',
  4: 'Good',
  5: 'Excellent',
};
const STARS = ['1', '2', '3', '4', '5'];

class UserProductRating extends Component {
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
    let result = `rating-star rating-star-${star}`;
    if (hover > 0) {
      if (hover >= star) {
        result = `rating-star rating-star-${star} star-${TEXT[hover]}`;
      }
    } else if (selected >= star) {
      result = `rating-star rating-${star}-star star-${TEXT[selected]}`;
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
            <div
              className={this.getClass(star)}
              role="button"
              onMouseEnter={() => this.handleEnter({ star })}
              onMouseLeave={() => this.handleLeave()}
              onClick={() => this.handleClick({ star })}
              key={TEXT[index]}
              tabIndex={0}
              onKeyPress={() => {}}
              id={star}
            >
              ★
            </div>
          ))
            }
          <span id="rating-text">{hover > 0 ? TEXT[hover] : TEXT[selected]}</span>
          <StatusCheck
            selected={selected}
            active
            required
            submit={false}
            hasValue={false}
            visited
          />
        </span>
      </div>
    );
  }
}

export default UserProductRating;
