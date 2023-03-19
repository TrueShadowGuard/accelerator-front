import { Box, Container } from "@mui/material";
import itransition from "../../../../pictures/itransition.png";
import bsmu from "../../../../pictures/bsmu.png";
import classes from "../home.module.css";
import React from "react";

const Footer = () => {
  let itransitionUrl = "https://itransition.com/";
  let bsmuUrl = "https://www.bsmu.by/";
  return (
    <footer className={classes.footer}>
      <Box
        position="static"
        px={{ xs: 3, sm: 10 }}
        sx={{ backgroundColor: "#E1E4FF", color: "#505050" }}
      >
        <Container>
          <Box sx={{ pt: 1, textAlign: "center" }}>
            <Box sx={{ pr: 1, maxHeight: "20", display: "inline" }}>
              <a href={itransitionUrl}>
                <img src={itransition} className={classes.title} alt="" />
              </a>
            </Box>
            <Box sx={{ pl: 1, maxHeight: "20", display: "inline" }}>
              <a href={bsmuUrl}>
                <img src={bsmu} className={classes.title} alt="" />
              </a>
            </Box>
          </Box>
          <Box textAlign="center" sx={{ pt: 3 }}>
            <p>&#9400; &#9413; Product created by @ Kasko & Popkov, 2019</p>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
