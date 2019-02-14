import React, { Component } from 'react';
import ProductInfo from './ProductInfo';
import ModalHeader from './ModalHeader';
import ProductRatingStars from './ProductRatingStars';
import UserProductRating from './UserProductRating';
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
      show: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  render() {
    const visible = { ...this.state };
    return (
      <div>
        <div role="button" tabIndex={0} className="button-write" onKeyPress={() => {}} onClick={this.handleOpen}>Write Post</div>
        <div className={visible.show ? 'modal-background' : 'hidden'} />
        <div className={visible.show ? 'modal' : 'hidden'}>
          <div id="modal-left">
            <ProductInfo />
          </div>
          <div id="modal-right">
            <ModalHeader handleClose={this.handleClose} />
            <ProductRatingStars />
            <UserProductRating />
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
    );
  }
}

export default ModalModel;
