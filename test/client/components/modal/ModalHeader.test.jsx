import React from 'react';
import { shallow } from 'enzyme';
import ModalHeader from '../../../../client/components/modal/ModalHeader';

describe('<ModalHeader />', () => {
  test('Should have 3 children', () => {
    const expected = 3;
    const wrapper = shallow(<ModalHeader />);
    expect(wrapper.find('.modal-right-el').children().length).toBe(expected);
  });
});