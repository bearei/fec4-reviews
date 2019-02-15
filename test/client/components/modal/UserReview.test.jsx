import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserReview from '../../../../client/components/modal/UserReview';

describe('<UserReview />', () => {
  test('Should have 2 children', () => {
    const expected = 2;
    const wrapper = shallow(<UserReview />);
    expect(wrapper.find('.modal-right-el').children().length).toBe(expected);
  });
});
