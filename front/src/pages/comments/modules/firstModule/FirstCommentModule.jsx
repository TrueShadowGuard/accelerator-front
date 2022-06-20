import React from 'react';
import classes from './FirstCommentModule.module.css'

const FirstCommentModule = () => {
  return (
      <div className={classes.firstCommentModule}>
        <span className={classes.content}>
          Comments and Feedbacks
        </span>
      </div>
  );
};

export default FirstCommentModule;