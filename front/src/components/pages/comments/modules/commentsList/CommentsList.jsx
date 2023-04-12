import React from 'react';
import classes from './CommentsList.module.css'
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import CommentsListItem from "./CommentsListItem";

const CommentsList = (props) => {

    const isListEmpty = !props.comments[0];

    return (
        <div className={classes.asideNav}>
            {isListEmpty ?

                <Box sx={{color: "#505050", pt: 3, textAlign: "center", height: 200}}>
                    There are no comments on the site yet. Be the first to leave it!
                </Box> :

                <List sx={{width: "100%"}}>
                    {props.comments.map(comment => (
                        <CommentsListItem comment={comment}/>
                    ))}
                </List>
            }
        </div>
    );
};

export default CommentsList;
