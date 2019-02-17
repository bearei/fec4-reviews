import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserProductRating from '../../../../client/components/modal/UserProductRating';

describe('<UserProductRating />', () => {
  test('Should have 1 child', () => {
    const expected = 1;
    const wrapper = shallow(<UserProductRating />);
    expect(wrapper.find('.modal-right-el').children().length).toBe(expected);
  });
});
