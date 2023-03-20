import React from 'react';
import classes from './Header.module.css'

const Header = () => {
  return (
      <div className={classes.root}>
        <span className={classes.content}>
          Comments and Feedbacks
        </span>
      </div>
  );
};

export default Header;
