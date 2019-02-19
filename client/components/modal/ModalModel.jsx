import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stars from '../util/Stars';
import ProductInfo from './ProductInfo';
import ModalHeader from './ModalHeader';
import ModalContainer from './ModalContainer';

const REQ = [
  true, true, true, false, true, false, true, false, false, false, false, true,
];

const REQINDEX = [
  0, 1, 2, 4, 6, 11,
];

const numbers = Array.from({ length: 12 }, (v, k) => k);


class ModalModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      active: 0,
      visited: Array.from({ length: 12 }, () => false),
      submit: false,
      values: Array.from({ length: 12 }, () => ''),
      hover: 0,
      itemId: props.itemId,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.changeFocus = this.changeFocus.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onHover(id) {
    this.setState({ hover: +id });
  }

  onLeave() {
    this.setState({ hover: 0 });
  }

  onSubmit() {
    const { values, visited, itemId } = this.state;
    const { submit } = this.props;
    let req = -1;
    for (let i = 0; i < REQINDEX.length; i++) {
      if (values[REQINDEX[i]] === '') {
        req = i;
        break;
      }
    }
    if (req >= 0) {
      this.setState({ submit: true },
        () => this.setState({ visited: visited.map(() => true) },
          () => this.setState({ active: req })));
    } else {
      const data = {
        rating: Number(values[0]),
        title: values[1],
        text: values[2],
        name: values[4],
        itemId,
      };
      if (values[3] !== '') {
        data.recommend = values[3] === 'yes';
      }
      if (values[7] !== '') {
        data.fit = Number(values[7]);
      }
      submit(data, this.handleClose);
    }
  }

  handleOpen() {
    this.setState({ visible: true });
  }

  handleClose() {
    this.setState({ visible: false }, () => this.setState({
      active: 0,
      visited: Array.from({ length: 12 }, () => false),
      submit: false,
      values: Array.from({ length: 12 }, () => ''),
    }));
  }

  changeFocus(id) {
    const { active, visited } = this.state;
    this.setState({ active: id });
    this.setState({
      visited: visited.map((element, index) => (index === active ? true : element)),
    });
  }

  changeValue(id, value) {
    const { values } = this.state;
    this.setState({
      values: values.map((element, index) => (index === id ? value : element)),
    });
  }

  render() {
    const {
      visible, active, submit, visited, values, hover,
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
              {numbers.map((number, index) => (
                <ModalContainer
                  active={active === index}
                  key={numbers[index]}
                  required={REQ[index]}
                  submit={submit}
                  value={values[index]}
                  hasValue={values[index] !== ''}
                  visited={visited[index]}
                  onClick={() => this.changeFocus(index)}
                  changeValue={this.changeValue}
                  index={index}
                  onHover={this.onHover}
                  hover={hover}
                  onLeave={() => this.onLeave()}
                  onSubmit={() => this.onSubmit()}
                />
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
  itemId: PropTypes.number,
  submit: PropTypes.func,
};

ModalModel.defaultProps = {
  empty: true,
  itemId: 0,
  submit: () => {},
};

export default ModalModel;
