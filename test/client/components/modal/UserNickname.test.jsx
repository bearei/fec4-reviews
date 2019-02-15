import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserNickname from '../../../../client/components/modal/UserNickname';

describe('<UserNickname />', () => {
  test('Should have 2 children', () => {
    const expected = 2;
    const wrapper = shallow(<UserNickname />);
    expect(wrapper.find('#user-nickname').children().length).toBe(expected);
  });
});
