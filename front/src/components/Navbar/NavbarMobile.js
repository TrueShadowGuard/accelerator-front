import React from 'react';
import {observer} from "mobx-react-lite";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ListItemText from "@mui/material/ListItemText";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import {Button, Drawer} from "@mui/material";
import menuStore from "../../menuStore";
import classes from "./Navbar.module.css"

const NavbarMobile = observer(() => {

    const open = menuStore.open;

    const closeNavbar = () => menuStore.setOpen(false);

    return (
        <Drawer variant="fixed" open={open} anchor="left" onClose={closeNavbar}>
            <Box as={"header"} className={classes.header} sx={{backgroundColor: "primary.main"}}/>
            <Divider/>
            <List className={classes.mobileList}>
                <ListItem button component={Link} to="/support" onClick={closeNavbar}>
                    <ListItemIcon>
                        <SupportAgentIcon fontSize="large" color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="Support"/>
                </ListItem>
                <ListItem button component={Link} to="/comments" onClick={closeNavbar}>
                    <ListItemIcon>
                        <ChatIcon fontSize="large" color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="Comments"/>
                </ListItem>
                <ListItem button component={Link} to="/" onClick={closeNavbar}>
                    <ListItemIcon>
                        <HomeIcon fontSize="large" color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <InfoIcon fontSize="large" color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="v 1.1.3"/>
                </ListItem>
            </List>
        </Drawer>
    )
});

export default NavbarMobile;