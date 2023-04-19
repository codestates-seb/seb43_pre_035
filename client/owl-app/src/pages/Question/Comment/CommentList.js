import styled from "styled-components";
import CommentCreated from "./CommentCreated";
import { useState } from "react";

const CommentListWrap = styled.div`
    padding: 10px;
    width: 750px;
    height: 45px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid white;
`

const CommentList = ({question}) => {

    const [comments,setComments] = useState(question.question_reply)
    console.log(comments)

    return (
        <CommentListWrap>
            {comments.map((comment, idx)=><CommentCreated comments={comment} key={idx}/>)}
        </CommentListWrap>
    )   
}

export default CommentList