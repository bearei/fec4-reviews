import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ReviewListItemFooter from '../../../../client/components/review/ReviewListItemFooter';

describe('<ReviewListItemFooter />', () => {
  test('Should have 4 children', () => {
    const expected = 4;
    const wrapper = shallow(<ReviewListItemFooter reviews={[]} />);
    expect(wrapper.find('#review-list-item-footer').children().length).toBe(expected);
  });
});
