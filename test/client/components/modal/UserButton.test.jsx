import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserButton from '../../../../client/components/modal/UserButton';

describe('<UserButton />', () => {
  test('Should have 1 child', () => {
    const expected = 1;
    const wrapper = shallow(<UserButton />);
    expect(wrapper.find('.modal-grid').children().length).toBe(expected);
  });
});
