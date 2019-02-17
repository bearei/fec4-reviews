import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stars from '../util/Stars';
import ProductInfo from './ProductInfo';
import ModalHeader from './ModalHeader';
import UserProductRating from './UserProductRating';
import ModalSubmit from './ModalSubmit';
import UserText from './UserText';
import UserButton from './UserButton';

const TITLES = [
  'Would you recommend this product to a friend?',
  'Fit',
  'Did you read product reviews online before first purchasing this item?',
  'Where did you purchase this item?',
];

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
                <input className="input-field" type="text" placeholder="Example: Makes hiking even easier" />
              </UserText>
              <UserText title="Review" required>
                <textarea className="input-field" rows="4" />
              </UserText>
              <UserButton title={TITLES[0]} />
              <UserText title="Nickname" required>
                <input className="input-field" type="text" placeholder="Example: jackie27" />
              </UserText>
              <UserText title="Location" required={false}>
                <input className="input-field" type="text" placeholder="Example: Seattle, WA" />
              </UserText>
              <UserText title="Email" required>
                <input className="input-field" type="text" placeholder="Example: youremail@example.com" />
              </UserText>
              <UserButton title={TITLES[1]} />
              <UserButton title={TITLES[2]} />
              <UserButton title={TITLES[3]} />
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
