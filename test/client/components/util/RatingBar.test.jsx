import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import RatingBar from '../../../../client/components/util/RatingBar';

describe('<RatingBar />', () => {
  test('Should have 1 child', () => {
    const expected = 1;
    const wrapper = shallow(<RatingBar />);
    expect(wrapper.find('#rating-bar').children().length).toBe(expected);
  });
});
