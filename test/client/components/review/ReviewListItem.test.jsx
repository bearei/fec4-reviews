import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ReviewListItem from '../../../../client/components/review/ReviewListItem';
import Stars from '../../../../client/components/util/Stars';
import FitBarContainer from '../../../../client/components/util/FitBarContainer';
import ReviewListItemFooter from '../../../../client/components/review/ReviewListItemFooter';

describe('<ReviewListItem />', () => {
  test('should exist', () => {
    expect(ReviewListItem).toBeDefined();
    expect(Stars).toBeDefined();
    expect(FitBarContainer).toBeDefined();
    expect(ReviewListItemFooter).toBeDefined();
  });
});
