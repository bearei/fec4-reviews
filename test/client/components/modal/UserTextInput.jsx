import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserTextInput from '../../../../client/components/modal/UserTextInput';

describe('<UserTextInput />', () => {
  test('Should have 2 children', () => {
    const expected = 2;
    const wrapper = shallow(<UserTextInput />);
    expect(wrapper.find('.modal-right-el').children().length).toBe(expected);
  });
});
