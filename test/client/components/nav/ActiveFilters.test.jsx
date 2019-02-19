import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ActiveFilters from '../../../../client/components/nav/ActiveFilters';

describe('<ActiveFilters />', () => {
  test('should exist', () => {
    expect(ActiveFilters).toBeDefined();
  });

  test('should have 3 children', () => {
    const expected = 3;
    const wrapper = shallow(<ActiveFilters />);
    expect(wrapper.find('#active-filters').children().length).toBe(expected);
  });
});
