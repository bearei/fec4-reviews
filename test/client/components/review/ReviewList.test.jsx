import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ReviewList from '../../../../client/components/review/ReviewList';
import ReviewListItem from '../../../../client/components/review/ReviewListItem';

describe('<ReviewList />', () => {
  test('should exist', () => {
    expect(ReviewListItem).toBeDefined();
  });
});
