import * as React from 'react';
import {useEffect, useState} from 'react';
import {Container} from "@mui/material";
import axios from "../../http/axios";
import FirstCommentModule from "./modules/firstModule/FirstCommentModule";
import SecondCommentModule from "./modules/secondModule/SecondCommentModule";
import ThirdCommentModule from "./modules/thirdModule/ThirdCommentModule";

const Comments = () => {

    const [comments, setComments] = React.useState([]);

    useEffect(() => {
        getComments();
    }, [])

    const getComments = () => {
        axios.get("/chemistry/comments")
        .then((res) => {
            setComments(res.data)
        })
    }

    const postComment = async (fullName, country, content, rating) => {
        try {
            const newComment = {
                fullName: fullName, country:country, content: content, rating: rating
            }
            comments.push(newComment);
            setComments(comments);
            // await comments.post.comment(fullName, country, content, value);
            // getComments();
        } catch (e) {
            console.error(e);
        }
    }

    return (
    <Container sx={{ mt: 1 }} position="center">
        <FirstCommentModule/>
        <SecondCommentModule comments={comments}/>
        <ThirdCommentModule onPostComment={postComment}/>
    </Container>
  );

    async function get() {
        try {
            const response = await comments.get();
        } catch (e) {
            console.error(e);
        }
    }
};

export default Comments;

