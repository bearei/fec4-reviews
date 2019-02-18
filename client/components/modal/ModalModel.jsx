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
  'Product Rating',
  'Review title',
  'Review',
  'Would you recommend this product to a friend?',
  'Nickname',
  'Location',
  'Email',
  'Fit',
  'Did you read product reviews online before first purchasing this item?',
  'Where did you purchase this item?',
  'What feedback do you have for the people who designed and manufactured this product?',
  'Submit',
];

const SAMPLES = [
  'Makes hiking even easier',
  'jackie27',
  'Seattle, WA',
  'youremail@example.com',
];

const REQ = [
  true, true, true, false, true, false, true, false, false, false, true,
];

const MODALS = [
  (<UserProductRating />),
  (<UserText title={TITLES[1]} required text placeholder={SAMPLES[0]} />),
  (<UserText title={TITLES[2]} required text={false} placeholder="" />),
  (<UserButton title={TITLES[3]} />),
  (<UserText title={TITLES[4]} required text placeholder={SAMPLES[1]} />),
  (<UserText title={TITLES[5]} required text placeholder={SAMPLES[2]} />),
  (<UserText title={TITLES[6]} required text placeholder={SAMPLES[3]} />),
  (<UserButton title={TITLES[7]} />),
  (<UserButton title={TITLES[8]} />),
  (<UserButton title={TITLES[9]} />),
  (<UserText title={TITLES[10]} required text={false} placeholder="" />),
  (<ModalSubmit />),
];

class ModalModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      active: 0,
      visited: Array.from({ length: 11 }, () => false),
      submit: false,
      values: Array.from({ length: 12 }, () => ''),
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.changeFocus = this.changeFocus.bind(this);
  }

  handleOpen() {
    this.setState({ visible: true });
  }

  handleClose() {
    this.setState({ visible: false });
  }

  changeFocus(id) {
    const { active, visited } = this.state;
    this.setState({ active: id });
    this.setState({ visited: visited.map((element, index) => {
      return index === active ? true : element;
    }),
    });
  }

  changeValue(id, value) {
    const { active, values } = this.state;
    this.setState({ values: values.map((element, index) => {
      return index === active ? value : element;
    }),
    });
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
              {MODALS.map((modal, index) => (
                <ModalContainer
                  active={active === index}
                  key={TITLES[index]}
                  required={REQ[index]}
                  submit={submit}
                  hasValue={values[index] !== ''}
                  visited={visited[index]}
                  onClick={() => this.changeFocus(index)}
                  changeValue={this.changeValue}
                >
                  {modal}
                </ModalContainer>
              ))}
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
