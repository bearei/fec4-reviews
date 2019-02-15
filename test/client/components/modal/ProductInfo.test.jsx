import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ProductInfo from '../../../../client/components/modal/ProductInfo';

describe('<ProductInfo />', () => {
  test('Should have 2 children', () => {
    const expected = 2;
    const wrapper = shallow(<ProductInfo />);
    expect(wrapper.find('#product-info').children().length).toBe(expected);
  });
});
