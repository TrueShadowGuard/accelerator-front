import {Box, Container, Grid} from "@mui/material";
import itransition from "../../../pictures/itransition.png";
import bsmu from "../../../pictures/bsmu.png";
import classes from "../home.module.css";
import React from "react";

const Footer = () => {
  let itransitionUrl = "https://itransition.by/";
  let bsmuUrl = "https://www.bsmu.by/";
  return (
    <footer className={classes.footer}>
      <Box position="static"
           px={{xs: 3, sm: 10}}
           sx={{backgroundColor: "#E1E4FF", color: "#505050"}}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} sx={{maxHeight: "20", textAlign: "right"}}>
              <a href={itransitionUrl}> <img src={itransition} className={classes.title} alt=""/></a>
            </Grid>
            <Grid item xs={2} sm={2} sx={{maxHeight: "20"}}>
              <a href={bsmuUrl}><img src={bsmu} className={classes.title} alt=""/></a>
            </Grid>
          </Grid>
          <Box textAlign="center" sx={{pt: 3, pr: 20}}>
            <p>&#9400; &#9413; Product created by @ Kasko & Popkov, 2019</p>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
