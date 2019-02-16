import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Averages from '../../../../client/components/nav/Averages';
import AveragesStars from '../../../../client/components/nav/AveragesStars';
import FitBarContainer from '../../../../client/components/util/FitBarContainer';

describe('<Averages />', () => {
  test('should exist', () => {
    expect(AveragesStars).toBeDefined();
    expect(FitBarContainer).toBeDefined();
  });
});
