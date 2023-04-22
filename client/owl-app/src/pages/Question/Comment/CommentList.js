import styled from "styled-components";
import CommentCreated from "./CommentCreated";
import { useState } from "react";
import AddComment from "./AddComment"
import axios from 'axios';


const CommentListWrap = styled.div`
    padding: 10px;
    width: 750px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid white;
`

const CommentList = ({ question }) => {

    const [comment, setComment] = useState(question.questionReplies ? question.questionReplies : []);
    const url_patch = `http://localhost:3001/questions/${question.id}`;
    // console.log(comment)

    const addCommentHandler = (newComment) => {
        // console.log("comment: ", comment);
        setComment([...comment, newComment])

        //axios.patch to add comments...-----> with real server, revise to use post to add comments
        if(question.questionReplies && comment.length){
            axios.patch(url_patch, {...question, "questionReplies": [...question.questionReplies, newComment]})
                .then((res) => {console.log("there arepatch success!", res)})
                .catch(err => {console.log("patch fail!", err)})

        }else{
            axios.patch(url_patch, {...question, "questionReplies": [newComment]})
            .then((res) => {console.log("patch success!", res)})
            .catch(err => {console.log("patch fail!", err)})
        }

    }

    return (
        <>
            {!!comment.length && <CommentListWrap>
                {comment.map((comment, idx) => <CommentCreated comment={comment} key={idx} />)}
            </CommentListWrap>}
            <AddComment addCommentHandler={addCommentHandler} ></AddComment>
        </>

    )
}

export default CommentList