import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import FitBarContainer from '../../../../client/components/util/FitBarContainer';

describe('<FitBarContainer />', () => {
  test('Should have 2 children', () => {
    const expected = 2;
    const wrapper = shallow(<FitBarContainer />);
    expect(wrapper.find('#fit-bar-container').children().length).toBe(expected);
  });
});
