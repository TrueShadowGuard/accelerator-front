import title from "../pictures/new-title.png";
import classes from "../pages/home/home.module.css";
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {NavLink} from "react-router-dom";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import List from "@mui/material/List";
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';


const drawerWidth = 180;
let isOpen = false;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'block',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minWidth:"100px",

    padding: theme.spacing(0, 1),
    backgroundColor:"#4556B2",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginRight: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


const NavBar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
      isOpen = true;
      setOpen(true);
  };

  const handleDrawerClose = () => {
      isOpen = false;
    setOpen(false);
  };


    return (
    <Box
      sx={{
          display: 'flex'
      }}
    >
      <AppBar sx={{maxWidth:isOpen ? `calc(100% - ${drawerWidth}px)` : `calc(100% - 73px)`, height: "80px"}} position="static">
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
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} anchor="right">
        <DrawerHeader>
            {!isOpen ?
                <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerOpen}
                sx={{height:"80px", color:'white', ...(open && { display: 'none' }) }}>
                <MenuIcon/>
                </IconButton> : <IconButton onClick={handleDrawerClose} sx={{height:"80px", color:'white', pl:"120px"}}>
                    {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton> }
        </DrawerHeader>
        <Divider/>
          <Box sx={{color: "#505050", fontWeight:"bold"}}>
              <List>
                  <ListItem button component={Link} to="/support">
                      <ListItemIcon>
                          <SupportAgentIcon fontSize="large" color="primary"/>
                      </ListItemIcon>
                      <ListItemText primary="Support" />
                  </ListItem>
                  <ListItem button component={Link} to="/comments">
                      <ListItemIcon>
                          <ChatIcon fontSize="large" color="primary"/>
                      </ListItemIcon>
                      <ListItemText primary="Comments" />
                  </ListItem>
                  <ListItem button component={Link} to="/">
                      <ListItemIcon>
                          <HomeIcon fontSize="large" color="primary"/>
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button>
                      <ListItemIcon onClick={handleDrawerOpen}>
                          <InfoIcon fontSize="large" color="primary"/>
                      </ListItemIcon>
                      <ListItemText primary="v 1.2.5" />
                  </ListItem>
              </List>
          </Box>
      </Drawer>
    </Box>
  );
};

export default NavBar;
