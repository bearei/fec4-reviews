import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserText from '../../../../client/components/modal/UserText';

describe('<UserText />', () => {
  test('Should have 2 children', () => {
    const expected = 2;
    const wrapper = shallow(<UserText />);
    expect(wrapper.find('.modal-right-el').children().length).toBe(expected);
  });
});
