import React, {useLayoutEffect, useRef} from 'react';
import menuStore from "../../menuStore";
import {observer} from "mobx-react-lite";
import useWindowSize from "../../hooks/useWindowSize";
import ListItem from "@mui/material/ListItem";
import {Link, NavLink} from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ListItemText from "@mui/material/ListItemText";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import List from "@mui/material/List";
import classes from "./Navbar.module.css";
import classNames from "classnames";
import {IconButton} from "@mui/material";


const NavbarDesktop = observer(props => {
    const open = menuStore.open;

    const navClass = classNames({
        [props.className]: props.className,
        [classes.nav]: true,
        [classes.open]: open
    });

    const navRef = useRef();
    const thumbnailRef = useRef();

    useLayoutEffect(setThumbnailWidth);

    return (
        <>
            <div className={classes.thumbnail} ref={thumbnailRef}/>
            <nav className={navClass} ref={navRef}>
                <ul className={classes.list}>
                    <li>
                        <NavLink to={"/support"} className={classes.navItem} activeClassName={classes.active}>
                            <SupportAgentIcon fontSize="large" color="primary"/>
                            {open && <span>Support</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/comments"} className={classes.navItem} activeClassName={classes.active}>
                            <ChatIcon fontSize="large" color="primary"/>
                            {open && <span>Comments</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to={"/"} className={classes.navItem} activeClassName={classes.active}>
                            <HomeIcon fontSize="large" color="primary"/>
                            {open && <span>Home</span>}
                        </NavLink>
                    </li>
                    <li>
                        <div className={classes.navItem}>
                            <InfoIcon fontSize="large" color="primary"/>
                            {open && <span>v 1.1.3</span>}
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );

    function setThumbnailWidth() {
        thumbnailRef.current.style.width = navRef.current.clientWidth + "px";
    }
});

export default NavbarDesktop;