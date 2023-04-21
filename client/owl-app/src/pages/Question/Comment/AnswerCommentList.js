import styled from "styled-components";
import CommentCreated from "./CommentCreated";
import { useState } from "react";


const CommentListWrap = styled.div`
    padding: 10px;
    width: 750px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

`

const AnswerCommentList = ({addanswerComment}) => {



    return (
        <>
        <CommentListWrap>
            {addanswerComment.map((comment, idx)=><CommentCreated comment={comment} key={idx} />)}
        </CommentListWrap>
        </>

    )   
}

export default AnswerCommentList