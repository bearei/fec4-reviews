import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserPurchase from '../../../../client/components/modal/UserPurchase';

describe('<UserPurchase />', () => {
  test('Should have 2 children', () => {
    const expected = 2;
    const wrapper = shallow(<UserPurchase />);
    expect(wrapper.find('.modal-right-el').children().length).toBe(expected);
  });
});
