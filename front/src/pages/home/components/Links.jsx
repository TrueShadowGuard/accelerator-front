import React from 'react';
import classes from "../home.module.css";
import bg from "../../../pictures/planet.jpg";
import {Box, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography} from "@mui/material";
import NavLinkStyled from "../../../components/NavLinkStyled";

const Planets = () => (
  <div className={classes.planets}>
    <img src={bg} alt=""/>
  </div>
);

const Links = () => {
  return (
    <main className={classes.main}>
      <Planets/>
      <div className={classes.cards}>
        <Card sx={{maxWidth: 340, minHeight: 400}}>
          <CardMedia sx={{width: "100%"}}
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
        <Card sx={{maxWidth: 340, minHeight: 400}}>
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
              The algorithm is designed to find structures in the amino acid sequence of proteins with an unstable
              conformation.
              The results are presented as excel files with a built-in calculation algorithm.
            </Typography>
          </CardContent>
          <CardActions>
            <NavLinkStyled to="/pent-un-fold" text="Select"/>
          </CardActions>
        </Card>
      </div>
    </main>
  );
};

export default Links;
