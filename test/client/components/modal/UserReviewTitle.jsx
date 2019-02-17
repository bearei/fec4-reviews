import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserReviewTitle from '../../../../client/components/modal/UserReviewTitle';

describe('<UserReviewTitle />', () => {
  test('Should have 2 children', () => {
    const expected = 2;
    const wrapper = shallow(<UserReviewTitle />);
    expect(wrapper.find('.modal-right-el').children().length).toBe(expected);
  });
});
