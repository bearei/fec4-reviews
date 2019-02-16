import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Stars from '../util/Stars';
import FitBarContainer from '../util/FitBarContainer';
import ReviewListItemFooter from './ReviewListItemFooter';

const ReviewListItem = ({
  review: {
    rating, name, createdAt, title, text, recommend, helpful, notHelpful, flag, fit,
  },
}) => (
  <div>
    <hr />
    <div className="review-body">
      <div>
        <Stars average={rating} />
        <span>
          {name}
        </span>
        <span> - </span>
        <span>
          {moment(createdAt).fromNow()}
        </span>
        <h2>{title}</h2>
        <h3>{text}</h3>
        <FontAwesomeIcon icon={recommend ? 'check-circle' : 'times-circle'} />
        <span>{recommend ? 'Yes, ' : 'No, '}</span>
        <span>I </span>
        <span>{recommend ? '' : 'don\'t '}</span>
        <span>recommend this product.</span>
        <ReviewListItemFooter
          helpful={helpful}
          not={notHelpful}
          flag={flag}
        />
      </div>
      <div>
        <FitBarContainer className={fit === 0 ? 'hidden' : ''} average={fit} />
      </div>
    </div>
  </div>
);

ReviewListItem.propTypes = {
  review: PropTypes.instanceOf(Object),
};

ReviewListItem.defaultProps = {
  review: {},
};

export default ReviewListItem;
