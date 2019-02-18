import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stars from '../util/Stars';
import ProductInfo from './ProductInfo';
import ModalHeader from './ModalHeader';
import ModalContainer from './ModalContainer';
import MODALS from './ModalConstants';

const REQ = [
  true, true, true, false, true, false, true, false, false, false, true,
];

const numbers = Array.from({ length: 12 }, (v, k) => k + 1);


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
                  key={numbers[index]}
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
