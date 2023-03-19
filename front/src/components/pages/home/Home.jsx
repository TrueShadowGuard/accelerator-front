import React from "react";
import { Box } from "@mui/material";
import Footer from "../../Footer/Footer";
import Cards from "./components/Links";
import classes from "./home.module.css";

const Home = () => {
  return (
    <Box className={classes.home}>
      <Cards />
    </Box>
  );
};

export default Home;
