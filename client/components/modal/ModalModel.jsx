import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Stars from '../util/Stars';
import ProductInfo from './ProductInfo';
import ModalHeader from './ModalHeader';
import ProductRatingStars from './ProductRatingStars';
import UserReviewTitle from './UserReviewTitle';
import UserReview from './UserReview';
import UserRecommend from './UserRecommend';
import UserNameAndLoc from './UserNameAndLoc';
import UserEmail from './UserEmail';
import UserFit from './UserFit';
import UserReadReview from './UserReadReview';
import UserPurchase from './UserPurchase';
import UserFeedback from './UserFeedback';
import ModalSubmit from './ModalSubmit';

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
              <ProductRatingStars />
              <UserReviewTitle />
              <UserReview />
              <UserRecommend />
              <UserNameAndLoc />
              <UserEmail />
              <UserFit />
              <UserReadReview />
              <UserPurchase />
              <UserFeedback />
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
