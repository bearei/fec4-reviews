import React from 'react';

const ReviewListItem = (props) => {
  const classes = { ...props };
  return (
    <div>
      <div id='review'>
        <h1>Rating: {classes.review.rating} {classes.review.name} - {classes.review.createdAt}</h1>
        <h2>{classes.review.title}</h2>
        <h3>{classes.review.text}</h3>
        <h3> {classes.review.recommend} I recommend</h3>
        <h3>Helfpul Yes{classes.review.helpful} No{classes.review.notHelpful} Report as inappropriate={props.review.innapropriate}</h3> 
      </div>
      <h1>------------------------------</h1>
    </div>
  );
};

export default ReviewListItem;
