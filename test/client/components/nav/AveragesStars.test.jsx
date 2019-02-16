import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import AveragesStars from '../../../../client/components/nav/AveragesStars';

describe('<AveragesStars />', () => {
  test('Should have 3 children', () => {
    const expected = 3;
    const wrapper = shallow(<AveragesStars />);
    expect(wrapper.find('#averages-stars').children().length).toBe(expected);
  });
});
