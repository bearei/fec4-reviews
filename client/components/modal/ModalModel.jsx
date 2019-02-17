import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stars from '../util/Stars';
import ProductInfo from './ProductInfo';
import ModalHeader from './ModalHeader';
import UserProductRating from './UserProductRating';
import ModalSubmit from './ModalSubmit';
import UserText from './UserText';
import UserButton from './UserButton';
import ModalContainer from './ModalContainer';

const TITLES = [
  'Would you recommend this product to a friend?',
  'Fit',
  'Did you read product reviews online before first purchasing this item?',
  'Where did you purchase this item?',
];

const SAMPLES = [
  'Makes hiking even easier',
  'jackie27',
  'Seattle, WA',
  'youremail@example.com',
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
              <ModalContainer active required submit hasValue visited>
                <UserText title="Review" required text placeholder={SAMPLES[0]} />
              </ModalContainer>
              <ModalContainer active required submit hasValue visited>
                <UserText title="Review" required text={false} placeholder />
              </ModalContainer>
              <ModalContainer active required submit hasValue visited>
                <UserButton title={TITLES[0]} />
              </ModalContainer>
              <ModalContainer active required submit hasValue visited>
                <UserText title="Nickname" required text placeholder={SAMPLES[1]} />
              </ModalContainer>
              <ModalContainer active required submit hasValue visited>
                <UserText title="Location" required text placeholder={SAMPLES[2]} />
              </ModalContainer>
              <ModalContainer active required submit hasValue visited>
                <UserText title="Email" required text placeholder={SAMPLES[3]} />
              </ModalContainer>
              <ModalContainer active required submit hasValue visited>
                <UserButton title={TITLES[1]} />
              </ModalContainer>
              <ModalContainer active required submit hasValue visited>
                <UserButton title={TITLES[2]} />
              </ModalContainer>
              <ModalContainer active required submit hasValue visited>
                <UserButton title={TITLES[3]} />
              </ModalContainer>
              <ModalContainer active required submit hasValue visited>
                <UserText title="What feedback do you have for the people who designed and manufactured this product?" required text={false} placeholder />
              </ModalContainer>
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
