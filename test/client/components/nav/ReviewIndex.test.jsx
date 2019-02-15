import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ReviewIndex from '../../../../client/components/nav/ReviewIndex';

describe('<ReviewIndex />', () => {
  test('Should have 3 children', () => {
    const expected = 3;
    const wrapper = shallow(<ReviewIndex />);
    expect(wrapper.find('#review-index').children().length).toBe(expected);
  });
});
