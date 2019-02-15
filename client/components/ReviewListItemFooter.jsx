import React from 'react';

const ReviewListItemFooter = (props) => {
  const classes = { ...props };
  console.log(classes)
  return (
    <div>
      <span>Helpful?</span>
      <span className="button-helpful">
        <span>Yes · </span>
        <span>{classes.helpful}</span>
      </span>
      <span className="button-helpful">
        <span> No · </span>
        <span>{classes.not}</span>
      </span>
      <span className={classes.flag ? '' : 'button-helpful'}>
        <span>{classes.flag ? 'Reported' : 'Report as inappropiate'}</span>
      </span>
    </div>
  );
};

export default ReviewListItemFooter;
