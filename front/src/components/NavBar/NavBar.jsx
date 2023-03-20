import title from "../../pictures/new-title.png";
import classes from "../pages/home/home.module.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";
import navigationStore from "../../stores/navigationStore";
import {AppBar} from "@mui/material";

const NavBar = observer(() => {
  const handleDrawerClick = () => {
    navigationStore.setOpen(!navigationStore.open);
  };

  return (
    <Box
      sx={{
        display: 'flex'
      }}
    >
      <AppBar sx={{height: "80px"}} position="static">
        <Box sx={{display: "flex", alignItems: "center", pr: 0, pl: "24px"}}>

          <NavLink to="/">
            <img src={title} className={classes.title} alt=""/>
          </NavLink>

          <Box sx={{width: "80px", ml: "auto", display: "flex"}}>
            <IconButton onClick={handleDrawerClick} sx={{height: "50px", width: "50px", color: 'white', m: "auto"}}>
              {navigationStore.open ? <ChevronRightIcon /> : <MenuIcon />}
            </IconButton>
          </Box>

        </Box>
      </AppBar>
    </Box>
  );
});

export default NavBar;
