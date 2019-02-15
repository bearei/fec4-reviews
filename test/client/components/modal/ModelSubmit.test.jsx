import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ModalSubmit from '../../../../client/components/modal/ModalSubmit'

describe('<ModalSubmit />', () => {
  test('Should have 4 children', () => {
    const expected = 4;
    const wrapper = shallow(<ModalSubmit />);
    expect(wrapper.find('.modal-right-el').children().length).toBe(expected);
  });
});
