import React from 'react';

const ReviewListItem = (props) => (
  <div>
    <div id='review'>
        <h1>Rating: {props.review.rating} {props.review.name} - {props.review.createdAt}</h1>
        <h2>{props.review.title}</h2>
        <h3>{props.review.text}</h3>
        <h3> {props.review.recommend} I recommend</h3>
        <h3>Helfpul Yes{props.review.helpful} No{props.review.notHelpful} Report as inappropriate={props.review.innapropriate}</h3> 
      </div>
      <h1>------------------------------</h1>
  </div>
)

export default ReviewListItem;