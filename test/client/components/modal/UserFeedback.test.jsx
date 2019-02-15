import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserFeedback from '../../../../client/components/modal/UserFeedback';

describe('<UserFeedback />', () => {
  test('Should have 2 children', () => {
    const expected = 2;
    const wrapper = shallow(<UserFeedback />);
    expect(wrapper.find('.modal-right-el').children().length).toBe(expected);
  });
});
