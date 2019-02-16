import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import FitBar from '../../../../client/components/util/FitBar';

describe('<FitBar />', () => {
  test('Should have 6 children', () => {
    const expected = 6;
    const wrapper = shallow(<FitBar />);
    expect(wrapper.find('#fit-bar').children().length).toBe(expected);
  });
});
