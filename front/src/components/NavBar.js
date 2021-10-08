import React from 'react';
import s from '../css/navBar.module.css';
import {NavLink} from "react-router-dom";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import NavLinkStyled from "./NavLinkStyled";

const NavBar = () => {
  return (
    <Box sx={{
      flexGrow: 1,
    }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{
            flexGrow: 1,
            "& a": {
              color: "#fff",
              textDecoration: "none",
              fontSize: '2rem',
              "&:hover": {
                color: "primary.light"
              }
            }
          }}>
            <NavLink to="/">Accelerator</NavLink>
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
