import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ModalSubmit from '../../../../client/components/modal/ModalSubmit';

describe('<ModalSubmit />', () => {
  test('Should have 6 children', () => {
    const expected = 6;
    const wrapper = shallow(<ModalSubmit />);
    expect(wrapper.find('#modal-submit').children().length).toBe(expected);
  });
});
