import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserRecommend from '../../../../client/components/modal/UserRecommend';

describe('<UserRecommend />', () => {
  test('Should have 2 children', () => {
    const expected = 2;
    const wrapper = shallow(<UserRecommend />);
    expect(wrapper.find('.modal-right-el').children().length).toBe(expected);
  });
});
