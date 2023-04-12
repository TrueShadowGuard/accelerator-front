import React from 'react';
import classes from './Header.module.css'

const Header = () => {
  return (
      <div className={classes.asideNav}>
        <span className={classes.content}>
          Comments and Feedbacks
        </span>
      </div>
  );
};

export default Header;
