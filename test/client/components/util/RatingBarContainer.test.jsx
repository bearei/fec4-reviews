import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import RatingBarContainer from '../../../../client/components/util/RatingBarContainer';

describe('<RatingBarContainer />', () => {
  test('Should have 4 children', () => {
    const expected = 4;
    const wrapper = shallow(<RatingBarContainer />);
    expect(wrapper.find('#rating-bar-container').children().length).toBe(expected);
  });
});
