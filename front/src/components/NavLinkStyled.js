import React from 'react';
import {NavLink} from "react-router-dom";

const NavLinkStyled = ({text, to}) => {
  return (
    <NavLink to={to}>
      <button>{text}</button>
    </NavLink>
  );
};

export default NavLinkStyled;
