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
      active: 0,
      visited: Array.from({ length: 1 }, () => false),
      submit: false,
      values: Array.from({ length: 1 }, () => ''),
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.change = this.change.bind(this);
  }

  handleOpen() {
    this.setState({ visible: true });
  }

  handleClose() {
    this.setState({ visible: false });
  }

  change(id) {
    this.setState({ active: id });
  }

  render() {
    const {
      visible, active, submit, visited, values,
    } = this.state;
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
              <ModalContainer
                active={active === 0}
                required
                submit={submit}
                hasValue={false}
                visited={visited[0]}
              >
                <UserText title="Review title" required text placeholder={SAMPLES[0]} />
              </ModalContainer>
              <ModalContainer
                active={active === 1}
                required
                submit={submit}
                hasValue={false}
                visited={visited[1]}
                
              >
                <UserText title="Review" required text={false} placeholder="" />
              </ModalContainer>
              <ModalContainer
                active={active === 2}
                required
                submit={submit}
                hasValue={false}
                visited={visited[2]}
              >
                <UserButton title={TITLES[0]} />
              </ModalContainer>
              <ModalContainer
                active={active === 3}
                required
                submit={submit}
                hasValue={false}
                visited={visited[3]}
              >
                <UserText title="Nickname" required text placeholder={SAMPLES[1]} />
              </ModalContainer>
              <ModalContainer
                active={active === 4}
                required
                submit={submit}
                hasValue={false}
                visited={visited[4]}
              >
                <UserText title="Location" required text placeholder={SAMPLES[2]} />
              </ModalContainer>
              <ModalContainer
                active={active === 5}
                required
                submit={submit}
                hasValue={false}
                visited={visited[5]}
              >
                <UserText title="Email" required text placeholder={SAMPLES[3]} />
              </ModalContainer>
              <ModalContainer
                active={active === 6}
                required
                submit={submit}
                hasValue={false}
                visited={visited[6]}
              >
                <UserButton title={TITLES[1]} />
              </ModalContainer>
              <ModalContainer
                active={active === 7}
                required
                submit={submit}
                hasValue={false}
                visited={visited[7]}
              >
                <UserButton title={TITLES[2]} />
              </ModalContainer>
              <ModalContainer
                active={active === 8}
                required
                submit={submit}
                hasValue={false}
                visited={visited[8]}
              >
                <UserButton title={TITLES[3]} />
              </ModalContainer>
              <ModalContainer
                active={active === 9}
                required
                submit={submit}
                hasValue={false}
                visited={visited[9]}
              >
                <UserText title="What feedback do you have for the people who designed and manufactured this product?" required text={false} placeholder="" />
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
