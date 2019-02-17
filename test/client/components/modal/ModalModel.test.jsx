import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Stars from '../../../../client/components/util/Stars';
import ProductInfo from '../../../../client/components/modal/ProductInfo';
import ModalHeader from '../../../../client/components/modal/ModalHeader';
import UserProductRating from '../../../../client/components/modal/UserProductRating';
import UserRecommend from '../../../../client/components/modal/UserRecommend';
import UserFit from '../../../../client/components/modal/UserFit';
import UserReadReview from '../../../../client/components/modal/UserReadReview';
import UserPurchase from '../../../../client/components/modal/UserPurchase';
import ModalSubmit from '../../../../client/components/modal/ModalSubmit';

describe('<ModalModel />', () => {
  test('should exist', () => {
    expect(Stars).toBeDefined();
    expect(ProductInfo).toBeDefined();
    expect(ModalHeader).toBeDefined();
    expect(UserProductRating).toBeDefined();
    expect(UserRecommend).toBeDefined();
    expect(UserFit).toBeDefined();
    expect(UserReadReview).toBeDefined();
    expect(UserPurchase).toBeDefined();
    expect(ModalSubmit).toBeDefined();
  });
});
