import React from 'react';
import {NavLink} from "react-router-dom";
import {Box, Button} from "@mui/material";

const sx = {
  "& a": {
    textDecoration: "none",
  }
}

const NavLinkStyled = ({to, text, disabled}) => {
  return (
    <Box sx={sx}>
      {disabled ? <Button variant="outlined" disabled>{text}</Button> :
        <NavLink to={to}>
          <Button variant="outlined">{text}</Button>
        </NavLink>
      }
    </Box>
  )
}


export default NavLinkStyled;
