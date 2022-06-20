import React from 'react';
import classes from './SecondCommentModule.module.css'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const SecondCommentModule = (props) => {

  return (
      <div className={classes.secondCommentModule}>
        {props.comments[0] ? <List sx={{width:"100%"}}>
          {props.comments.map((result) => (
              <ListItem alignItems="flex-start"
                        className={classes.card}>
                <ListItemAvatar>
                  <Avatar rating={result.rating}
                          className={classes.avatar}
                          src="https://vologdamarafon.ru/static/img/no-photo.png"/>
                </ListItemAvatar>
                <ListItemText
                    primary={result.fullName + " (" + result.country + ")"}
                    secondary={
                      <React.Fragment>
                        {result.content}
                      </React.Fragment>
                    }
                />
                <Box className={classes.rating}>
                  <Rating name="read-only" value={result.rating} readOnly />
                </Box>
              </ListItem>
          ))}
        </List> : <Box sx={{color:"#505050", pt:3, textAlign: "center", height:200}}>
          There are no comments on the site yet. Be the first to leave it!
        </Box>}
      </div>
  );
};

export default SecondCommentModule;