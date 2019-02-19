import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import RatingBarContainer from '../../../../client/components/util/RatingBarContainer';

describe('<RatingBarContainer />', () => {
  test('Should have 1 child', () => {
    const expected = 1;
    const wrapper = shallow(<RatingBarContainer />);
    expect(wrapper.find('#rating-bar-container').children().length).toBe(expected);
  });
});
