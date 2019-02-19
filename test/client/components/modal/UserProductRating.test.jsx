import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserProductRating from '../../../../client/components/modal/UserProductRating';

describe('<UserProductRating />', () => {
  test('Should have 7 children', () => {
    const expected = 7;
    const wrapper = shallow(<UserProductRating />);
    expect(wrapper.find('#user-product-rating').children().length).toBe(expected);
  });
});
