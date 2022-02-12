import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import title from "../pictures/new-title.png";
import classes from "../pages/home/home.module.css";

const NavBar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              "& a": {
                color: "#fff",
                textDecoration: "none",
                fontSize: "2rem",
                "&:hover": {
                  color: "primary.light",
                },
              },
            }}
          >
            <Box>
              <NavLink to="/">
                <img src={title} className={classes.title} alt="" />
              </NavLink>
              <Box
                as="span"
                sx={{
                  position: "static",
                  bottom: "-3px",
                  fontSize: "13px",
                  color: "#ddd",
                }}
              >
                v 1.1.1
              </Box>
            </Box>
          </Box>
          <Button href="/support" color="inherit" className={classes.title}>
            Support
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
