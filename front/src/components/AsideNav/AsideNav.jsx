import React from 'react';
import classes from './AsideNav.module.css';
import {Link} from "react-router-dom";
import {Box, List, ListItemButton, ListItemIcon} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ChatIcon from "@mui/icons-material/Chat";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import navigationStore from "../../stores/navigationStore";
import clsx from "clsx";
import {observer} from "mobx-react-lite";

const AsideNav = observer(() => {

  const className = clsx(classes.asideNav, {[classes.open]: navigationStore.open});

  return (
    <>
      <Box className={classes.static}></Box>

      <Box className={className} sx={{boxShadow: 1}}>
        <List>
          <ListItemButton component={Link} to="/support">
            <ListItemIcon>
              <SupportAgentIcon fontSize="large" color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Support"/>
          </ListItemButton>
          <ListItemButton component={Link} to="/comments">
            <ListItemIcon>
              <ChatIcon fontSize="large" color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Comments"/>
          </ListItemButton>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <HomeIcon fontSize="large" color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Home"/>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon fontSize="large" color="primary"/>
            </ListItemIcon>
            <ListItemText primary="v 1.3.0"/>
          </ListItemButton>
        </List>
      </Box>
    </>
  );
});

export default AsideNav;