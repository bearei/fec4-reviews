import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserEmail from '../../../../client/components/modal/UserEmail';

describe('<UserEmail />', () => {
  test('Should have 1 child', () => {
    const expected = 1;
    const wrapper = shallow(<UserEmail />);
    expect(wrapper.find('.modal-right-el').children().length).toBe(expected);
  });
});
