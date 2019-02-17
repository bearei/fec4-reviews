import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stars from '../util/Stars';
import ProductInfo from './ProductInfo';
import ModalHeader from './ModalHeader';
import UserProductRating from './UserProductRating';
import ModalSubmit from './ModalSubmit';
import UserText from './UserText';
import UserButton from './UserButton';

class ModalModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ visible: true });
  }

  handleClose() {
    this.setState({ visible: false });
  }

  render() {
    const { visible } = this.state;
    const { empty } = this.props;
    return (
      <div>
        <div className={empty ? '' : 'hidden'}>
          <Stars average={0} />
          <div role="button" tabIndex={0} onKeyPress={() => {}} onClick={this.handleOpen}>Be the first to review this product</div>
        </div>
        <div className={empty && !(empty && visible) ? 'hidden' : ''}>
          <div role="button" tabIndex={0} className={empty ? 'hidden' : 'button-write f-right'} onKeyPress={() => {}} onClick={this.handleOpen}>Write Post</div>
          <div className={visible ? 'modal-background' : 'hidden'} />
          <div className={visible ? 'modal' : 'hidden'}>
            <div id="modal-left">
              <ProductInfo />
            </div>
            <div id="modal-right">
              <ModalHeader handleClose={this.handleClose} />
              <UserProductRating />
              <UserText title="Review" required>
                <input className="input-field" type="text" placeholder="Makes hiking even easier" />
              </UserText>
              <UserText title="Review" required>
                <textarea className="input-field" rows="4" />
              </UserText>
              <UserButton title="Would you recommend this product to a friend">
                <ul>
                  <li className="button-recommend">Yes</li>
                  <li className="button-recommend">No</li>
                </ul>
              </UserButton>
              <UserText title="Nickname" required>
                <input className="input-field" type="text" placeholder="jackie27" />
              </UserText>
              <UserText title="Location" required={false}>
                <input className="input-field" type="text" placeholder="Seattle, WA" />
              </UserText>
              <UserText title="Email" required>
                <input className="input-field" type="text" placeholder="youremail@example.com" />
              </UserText>
              <UserButton title="Fit">
                <div>
                  <input type="radio" name="fitbuttons" id="1" value="1" />
                  <input type="radio" name="fitbuttons" id="2" value="2" />
                  <input type="radio" name="fitbuttons" id="3" value="3" />
                  <input type="radio" name="fitbuttons" id="4" value="4" />
                  <input type="radio" name="fitbuttons" id="5" value="5" />
                  <p>Runs Small   Too Large</p>
                </div>
              </UserButton>
              <UserButton title="Did you read product reviews online before first purchasing this item?">
                <div>
                  <select>
                    <option value="select">Select</option>
                    <option value="online">Yes</option>
                    <option value="in-store">No</option>
                  </select>
                </div>
              </UserButton>
              <UserButton title="Where did you purchase this item?">
                <div>
                  <select>
                    <option value="select">Select</option>
                    <option value="online">Online</option>
                    <option value="in-store">In-Store</option>
                  </select>
                </div>
              </UserButton>
              <UserText title="What feedback do you have for the people who designed and manufactured this product?" required={false}>
                <textarea className="input-field" rows="4" />
              </UserText>
              <ModalSubmit />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ModalModel.propTypes = {
  empty: PropTypes.bool,
};

ModalModel.defaultProps = {
  empty: true,
};

export default ModalModel;
