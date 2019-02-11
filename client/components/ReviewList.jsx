import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

const ReviewList = (props) => (
  <div>
    <div id='reviews'>
      <h1>------------------------------</h1>
      {props.reviews.map((review, index) => <ReviewListItem review={review} key={index} />)}
      </div>
  </div>
)

export default ReviewList;
