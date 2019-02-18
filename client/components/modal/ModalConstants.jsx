import React from 'react';
import UserProductRating from './UserProductRating';
import ModalSubmit from './ModalSubmit';
import UserText from './UserText';
import UserButton from './UserButton';

const TITLES = [
  'Product Rating',
  'Review title',
  'Review',
  'Would you recommend this product to a friend?',
  'Nickname',
  'Location',
  'Email',
  'Fit',
  'Did you read product reviews online before first purchasing this item?',
  'Where did you purchase this item?',
  'What feedback do you have for the people who designed and manufactured this product?',
  'Submit',
];

const SAMPLES = [
  'Makes hiking even easier',
  'jackie27',
  'Seattle, WA',
  'youremail@example.com',
];

const MODALS = [
  (<UserProductRating />),
  (<UserText title={TITLES[1]} required text placeholder={SAMPLES[0]} />),
  (<UserText title={TITLES[2]} required text={false} placeholder="" />),
  (<UserButton title={TITLES[3]} />),
  (<UserText title={TITLES[4]} required text placeholder={SAMPLES[1]} />),
  (<UserText title={TITLES[5]} required text placeholder={SAMPLES[2]} />),
  (<UserText title={TITLES[6]} required text placeholder={SAMPLES[3]} />),
  (<UserButton title={TITLES[7]} />),
  (<UserButton title={TITLES[8]} />),
  (<UserButton title={TITLES[9]} />),
  (<UserText title={TITLES[10]} required text={false} placeholder="" />),
  (<ModalSubmit />),
];

export default MODALS;
