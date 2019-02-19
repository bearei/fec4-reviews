import React from 'react';
import { shallow } from 'enzyme';
import Stars from '../../../../client/components/util/Stars';

describe('<Stars />', () => {
  test('should exist', () => {
    const wrapper = shallow(<Stars />);
    expect(wrapper.find(Stars)).toBeDefined();
  });
});
