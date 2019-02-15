import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserFit from '../../../../client/components/modal/UserFit';

describe('<UserFit />', () => {
  test('Should have 2 children', () => {
    const expected = 2;
    const wrapper = shallow(<UserFit />);
    expect(wrapper.find('.modal-right-el').children().length).toBe(expected);
  });
});
