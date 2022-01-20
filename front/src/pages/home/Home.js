import React from 'react';
import styles from '../../css/home.module.css';
import NavLinkStyled from "../../components/NavLinkStyled";
import bg from "../../pictures/planet.jpg";
import {Bolt} from "@mui/icons-material";
import {
  BottomNavigationAction,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia, Checkbox, FormControlLabel, Grid,
  Typography
} from "@mui/material";
import Footer from "../../components/Footer";
import {NavLink} from "react-router-dom";

const Home = () => {
  let project;
  return (
      <Box>
        <Box sx={{pb:"4%"}} position="center">
          <div className={styles.home}>
            <div className={styles.planets}>
              <img src={bg} alt=""/>
            </div>
            <Grid sx={{pt:5}}container position="center" spacing={4}>
              <Grid item xs={3}>
              </Grid>
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 340, minHeight:400}}>
                  <CardMedia sx={{width:"100%"}}
                      component="img"
                      height="155"
                      image="https://zums.edu.bd/images/slide/2.jpg"
                      alt="amino acid sequence"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Counter
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Calculates the content of all amino acids in the
                      amino acid sequence of the introduced protein.
                      The prevailing amino acid is determined.
                      The result is displayed in the form of a diagram and table.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <NavLinkStyled to="/counter" text="Select"/>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 340, minHeight:400}}>
                  <CardMedia
                      component="img"
                      height="155"
                      image="https://cdn.thomasnet.com/insights-images/5cb3d598-0ea7-4a42-8e92-084d1384cf08/750px.png"
                      alt="amino acid sequence"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Pent Unfold
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      The algorithm is designed to find structures in the amino acid sequence of proteins with an unstable conformation.
                      The results are presented as excel files with a built-in calculation algorithm.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <NavLinkStyled to="/pent-un-fold" text="Select"/>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={3}>
              </Grid>
            </Grid>
            <Box sx={{pt:3}}>
            <div className="container">
              <div className="row">
                {/*<div className="col-md-4">*/}
                {/*  <h2>Accelerator</h2>*/}
                {/*  <p>*/}
                {/*    Increases the speed of processing PDB files.*/}
                {/*    It computes the length between the desired ligand and the nearest atom.*/}
                {/*    As a result, we have a list of binding sites and long links.*/}
                {/*  </p>*/}
                {/*  <NavLinkStyled to="/accelerator" text="Accelerate up"/>*/}
                {/*</div>*/}
              {/*  <div className="col-md-4">*/}
              {/*    <h2>Analyzer</h2>*/}
              {/*    <p>*/}
              {/*      Analyzes the entered amino acid sequence.*/}
              {/*      Calculates the fidelity of the bonds of the selected*/}
              {/*      ligand with the given protein.*/}
              {/*      Indicates hypothetical binding sites and their amino acid composition.*/}
              {/*    </p>*/}
              {/*    <NavLinkStyled to="/analyzer" text="To analyze" disabled/>*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<div className="row">*/}
              {/*  <div className="col-md-4">*/}
              {/*    <h2>Mystery</h2>*/}
              {/*    <p>*/}
              {/*      I myself do not yet know what will come of this in the future,*/}
              {/*      but so far the literal lasting is simply converted to amino acid.*/}
              {/*    </p>*/}
              {/*    <NavLinkStyled to="/mystery" text="Go to mystery" disabled/>*/}
              {/*  </div>*/}

              </div>
            </div>
        </Box>
          </div>
        </Box>
        <Footer/>

      </Box>



  );
};

export default Home;
