import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SortSelector from '../../../../client/components/nav/SortSelector';

describe('<SortSelector />', () => {
  test('Should have 2 children', () => {
    const expected = 2;
    const wrapper = shallow(<SortSelector />);
    expect(wrapper.find('#sort-selector').children().length).toBe(expected);
  });
});
