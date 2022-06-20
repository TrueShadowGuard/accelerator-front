import * as React from 'react';
import {useEffect} from 'react';
import {Container} from "@mui/material";
import axios from "../../http/axios";
import Header from "./modules/header/Header";
import CommentsList from "./modules/commentsList/CommentsList";
import MakeComment from "./modules/makeComment/MakeComment";

const Comments = () => {

    const [comments, setComments] = React.useState([]);

    useEffect(getComments, []);

    return (
        <Container sx={{mt: 1}} position="center">
            <Header/>
            <CommentsList comments={comments}/>
            <MakeComment onPostComment={postComment}/>
        </Container>
    );

    function getComments() {
        axios.get("/chemistry/comments")
            .then((res) => {
                setComments(res.data)
            })
    }

    async function postComment(fullName, country, content, rating) {
        try {
            const newComment = {
                fullName: fullName, country: country, content: content, rating: rating
            }
            setComments([...comments, newComment]);
            // await comments.post.comment(fullName, country, content, value);
            // getComments();
        } catch (e) {
            console.error(e);
        }
    }
};

export default Comments;

