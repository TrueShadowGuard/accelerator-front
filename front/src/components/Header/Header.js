import logo from "../../pictures/new-title.png";
import classes from "./Header.module.css";
import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import {NavLink} from "react-router-dom";
import {AppBar, IconButton, MenuItem} from "@mui/material";
import {Menu as MenuIcon} from "@mui/icons-material";
import menuStore from "../../menuStore";
import {useLayoutEffect, useRef} from "react";

const Header = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const thumbnailRef = useRef();
    const headerRef = useRef();

    useLayoutEffect(setThumbnailHeight);

    return (
        <>
            <div ref={thumbnailRef}></div>
            <AppBar position={"fixed"} className={classes.header} ref={headerRef}>
                <div className={classes.toolbar}>
                    <div className={classes.logoAndMenuBtn}>
                        <IconButton className={classes.menuButton} onClick={menuStore.switchOpen}>
                            <MenuIcon sx={{color: "white"}}/>
                        </IconButton>
                        <NavLink to="/" className={classes.logo}>
                            <img src={logo} alt=""/>
                        </NavLink>
                    </div>
                </div>
            </AppBar>
        </>
    );

    function setThumbnailHeight() {
        console.log(thumbnailRef.current, headerRef.current)
        thumbnailRef.current.style.height = headerRef.current.clientHeight + "px";
    }
};


export default Header;
