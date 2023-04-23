import styled from "styled-components";
import CommentCreated from "./CommentCreated";
import { useState } from "react";
import AddComment from "./AddComment"


const CommentListWrap = styled.div`
    padding: 10px;
    width: 750px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid white;
`

const CommentList = ({question}) => {
    // question_reply

    const [comment,setComment] = useState(question.question_reply ? question.question_reply : [])
    
    // console.log(comment)

    const addCommentHandler = (newComment) => {
        setComment([...comment, newComment])

        
        }

    return (
        <>
        {comment.length &&
        <CommentListWrap>
            {comment.map((comment, idx)=><CommentCreated comment={comment} key={idx} />)}
        </CommentListWrap>}
            <AddComment addCommentHandler={addCommentHandler} ></AddComment>
        </>

    )   
}

export default CommentList