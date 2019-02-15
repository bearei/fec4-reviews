import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Stars from './Stars';
import AveragesFit from './AveragesFit';
import ReviewListItemFooter from './ReviewListItemFooter';

const ReviewListItem = (props) => {
  const classes = { ...props };
  return (
    <div>
      <hr />
      <div className="review-body">
        <div>
          <Stars average={classes.review.rating} />
          <span>
            {classes.review.name}
          </span>
          <span> - </span>
          <span>
            {moment(classes.review.createdAt).fromNow()}
          </span>
          <h2>{classes.review.title}</h2>
          <h3>{classes.review.text}</h3>
          <FontAwesomeIcon icon={classes.review.recommend ? 'check-circle' : 'times-circle'} />
          <span>{classes.review.recommend ? 'Yes, ' : 'No, '}</span>
          <span>I </span>
          <span>{classes.review.recommend ? '' : 'don\'t'}</span>
          <span>recommend this product.</span>
          <ReviewListItemFooter
            helpful={classes.review.helpful}
            not={classes.review.notHelpful}
            flag={classes.review.inappropriate}
          />
        </div>
        <div>
          <AveragesFit className={classes.review.fit === 0 ? 'hidden' : ''} average={classes.review.fit} />
        </div>
      </div>
    </div>
  );
};

export default ReviewListItem;
