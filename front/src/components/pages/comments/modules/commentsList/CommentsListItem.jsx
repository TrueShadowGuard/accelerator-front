import React from 'react';
import classes from "./CommentsList.module.css";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ListItem from "@mui/material/ListItem";

const CommentsListItem = ({comment}) => {
    return (
        <ListItem alignItems="flex-start"
                  className={classes.card}>
            <ListItemAvatar>
                <Avatar rating={comment.rating}
                        className={classes.avatar}
                        src="https://vologdamarafon.ru/static/img/no-photo.png"/>
            </ListItemAvatar>
            <ListItemText
                primary={comment.fullName + " (" + comment.country + ")"}
                secondary={
                    <React.Fragment>
                        {comment.content}
                    </React.Fragment>
                }
            />
            <Box className={classes.rating}>
                <Rating name="read-only" value={comment.rating} readOnly/>
            </Box>
        </ListItem>
    );
};

export default CommentsListItem;
