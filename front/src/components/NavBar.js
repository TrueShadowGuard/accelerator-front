import React from 'react';
import {NavLink} from "react-router-dom";
import {AppBar, Box, Button, Toolbar} from "@mui/material";

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
            <Box>
              <NavLink to="/">Accelerator</NavLink>
              <Box as="span" sx={{
                position: "relative",
                bottom: "-3px",
                color: "#ddd",
              }}>v 1.0.3</Box>
            </Box>
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
