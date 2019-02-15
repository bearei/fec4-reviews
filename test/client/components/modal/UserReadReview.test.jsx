import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserReadReview from '../../../../client/components/modal/UserReadReview';

describe('<UserReadReview />', () => {
  test('Should have 2 children', () => {
    const expected = 2;
    const wrapper = shallow(<UserReadReview />);
    expect(wrapper.find('.modal-right-el').children().length).toBe(expected);
  });
});
