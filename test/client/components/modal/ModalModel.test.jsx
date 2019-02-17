import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Stars from '../../../../client/components/util/Stars';
import ProductInfo from '../../../../client/components/modal/ProductInfo';
import ModalHeader from '../../../../client/components/modal/ModalHeader';
import UserProductRating from '../../../../client/components/modal/UserProductRating';
import ModalSubmit from '../../../../client/components/modal/ModalSubmit';

describe('<ModalModel />', () => {
  test('should exist', () => {
    expect(Stars).toBeDefined();
    expect(ProductInfo).toBeDefined();
    expect(ModalHeader).toBeDefined();
    expect(UserProductRating).toBeDefined();
    expect(ModalSubmit).toBeDefined();
  });
});
