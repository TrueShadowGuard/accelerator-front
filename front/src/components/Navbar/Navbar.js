import React from 'react';
import useWindowSize from "../../hooks/useWindowSize";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

const Navbar = () => {

    const {width} = useWindowSize();
    const isMobile = width < 700;

    if(isMobile)
        return <NavbarMobile />;
    else
        return <NavbarDesktop />;

};

export default Navbar;