import React from 'react';
import classes from './AsideNav.module.css';
import {Link} from "react-router-dom";
import {Box, List, ListItemIcon} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ChatIcon from "@mui/icons-material/Chat";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import navigationStore from "../../stores/navigationStore";
import clsx from "clsx";
import {observer} from "mobx-react-lite";

const AsideNav = observer(() => {

  const className = clsx(classes.root, {[classes.open]: navigationStore.open});

  return (
    <>
      <div className={classes.static}></div>
      <Box sx={{color: "#505050", fontWeight: "bold", boxShadow: 1}} className={className}>
        <List>
          <ListItem button component={Link} to="/support">
            <ListItemIcon>
              <SupportAgentIcon fontSize="large" color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Support"/>
          </ListItem>
          <ListItem button component={Link} to="/comments">
            <ListItemIcon>
              <ChatIcon fontSize="large" color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Comments"/>
          </ListItem>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon fontSize="large" color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Home"/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon fontSize="large" color="primary"/>
            </ListItemIcon>
            <ListItemText primary="v 1.3.0"/>
          </ListItem>
        </List>
      </Box>
    </>
  );
});

export default AsideNav;