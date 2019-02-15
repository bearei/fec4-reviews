import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import ModalHeader from '../../../../client/components/modal/ModalHeader';

describe('<ModalHeader />', () => {
  xtest('Should have 3 children', () => {
    const expected = 3;
    const wrapper = shallow(<ModalHeader />);
    expect(wrapper.find('.modal-right-el').children().length).toBe(expected);
  });

  xtest('Test click handler', () => {
    const expected = true;
    const spy = sinon.spy();
    const wrapper = shallow(<ModalHeader handleClose={spy} />);
    wrapper.find('FontAwesomeIcon').simulate('click');
    expect(spy.called).toBe(expected);
  });
});