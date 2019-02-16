import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ProductRatingStars from '../../../../client/components/modal/ProductRatingStars';

describe('<ProductRatingStars />', () => {
  test('Should have 1 child', () => {
    const expected = 1;
    const wrapper = shallow(<ProductRatingStars />);
    expect(wrapper.find('.modal-right-el').children().length).toBe(expected);
  });
});
