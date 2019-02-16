import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserNameAndLoc from '../../../../client/components/modal/UserNameAndLoc';

describe('<UserNameAndLoc />', () => {
  test('Should have 2 children', () => {
    const expected = 2;
    const wrapper = shallow(<UserNameAndLoc />);
    expect(wrapper.find('.modal-right-el').children().length).toBe(expected);
  });
});
