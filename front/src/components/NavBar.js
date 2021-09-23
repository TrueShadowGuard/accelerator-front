import React from 'react';
import s from '../css/navBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={s.navbar}>
      <NavLink to="/" className={s.navbarBrand}>
        <span>Accelerator</span>
      </NavLink>
      <ul className={s.menu}>
        <li>
          <NavLink to="/login">
            <span>Sign in </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/register">
            <span>Register </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
