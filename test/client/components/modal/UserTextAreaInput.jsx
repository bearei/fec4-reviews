import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserTextAreaInput from '../../../../client/components/modal/UserTextAreaInput';

describe('<UserTextAreaInput />', () => {
  test('Should have 2 children', () => {
    const expected = 2;
    const wrapper = shallow(<UserTextAreaInput />);
    expect(wrapper.find('.modal-right-el').children().length).toBe(expected);
  });
});
