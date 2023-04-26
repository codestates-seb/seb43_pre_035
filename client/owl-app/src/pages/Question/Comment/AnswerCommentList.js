import styled from "styled-components";
import CommentCreated from "./CommentCreated";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CommentListWrap = styled.div`
    padding: 10px;
    height: 100%;
    width: 750px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

`

const AnswerCommentList = ({answerComments, updateAnswerCommentHandler, deleteAnswerCommentHandler,isLoggedIn, openModal}) => {


    console.log(answerComments)



    return (
        <>
        <CommentListWrap>
            {answerComments && answerComments.map((comment)=>
            <CommentCreated comment={comment}
                            openModal={openModal}
                            commentType={'aComment'}
                            isLoggedIn={isLoggedIn}
                            updateAnswerCommentHandler={updateAnswerCommentHandler}
                            deleteAnswerCommentHandler={deleteAnswerCommentHandler}
                            key={comment.id} />)}
        </CommentListWrap>
        </>

    )
}

export default AnswerCommentList