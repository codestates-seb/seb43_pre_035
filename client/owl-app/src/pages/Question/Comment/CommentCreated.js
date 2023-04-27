import styled from "styled-components"
import { UpdateButton } from "../../../styles/UIStyles";
import { useState } from "react";
import CommentInputPatch from "./CommentInputPatch";
import AnswerCommentInputPatch from "./AnswerCommentInputPatch";
import { UserContext } from "../../../utils/UserContextConfig";
import { useContext } from 'react';



const CommentWrap = styled.div`
    padding: 10px;
    padding-left: 50px;
    width: 750px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid #E7CC8F;
    color: white;
`

const CommentDetail = styled.div`
    padding: 10px;
    width: 60vw;
    word-wrap: break-word;
    white-space: pre-wrap;
`

const CommentUser = styled.div`
    padding: 10px;
    width: 20vw;
    color: var(--colors-lightbrown);
`

const CommentDate = styled.div`
    padding: 10px;
    font-size: 13px;
    width: 20vw;
    color: var(--colors-lightbrown);
`
const convertDate = (string) => {
    return `${string.substring(0, 4)}년 ${String(Number(string.substring(5, 7)))}월 ${String(Number(string.substring(8, 10)))}일`
  }

const CommentCreated = ({comment, commentType, deleteAnswerCommentHandler,updateQuestionCommentHandler, updateAnswerCommentHandler, deleteQuestionCommentHandler, openModal})=>{

    const  [isEditable,setIsEditable] = useState(false);
    const  [updatedContent, setUpdatedContent] = useState(comment.content);
    const { memberId ,isLoggedIn} = useContext(UserContext);



    const deleteClickHandler = (e) => {
        e.stopPropagation();
        // console.log("comment delete clicked!");
        if(!isLoggedIn) {openModal(); return;};
        if (commentType==='qComment') deleteQuestionCommentHandler(comment.questionReplyId);
        if (commentType==='aComment') deleteAnswerCommentHandler(comment.answerReplyId);

    }




    const editClickHandler = () => {
        // console.log("comment update clicked!");
        if(!isLoggedIn) {openModal(); return};
        if (commentType==='qComment') updateQuestionCommentHandler(comment.questionReplyId, updatedContent);
        if (commentType==='aComment') updateAnswerCommentHandler(comment.answerReplyId, updatedContent);

    }



    return(
        <>
            {isEditable? (commentType === 'qComment' ? <CommentInputPatch
                                            updatedContent={updatedContent}
                                            setUpdatedContent={setUpdatedContent}
                                            editClickHandler={editClickHandler}
                                            setIsEditable={setIsEditable}/> :
            <AnswerCommentInputPatch updatedContent={updatedContent}
                                setUpdatedContent={setUpdatedContent}
                                editClickHandler={editClickHandler}
                                setIsEditable={setIsEditable}/>) :
                            <CommentWrap>
                            <CommentDetail>{updatedContent}</CommentDetail>
                            <CommentUser>{comment.member.displayName}</CommentUser>
                            <CommentDate>{convertDate(comment.updateDate)}</CommentDate>
                            {memberId===comment.member.memberId ?
                            <>
                            <UpdateButton onClick={()=>{setIsEditable(true)}}>수정
                            </UpdateButton>
                            <UpdateButton onClick={deleteClickHandler}>삭제</UpdateButton>
                            </> : null}
                        </CommentWrap>
            }
        </>

    )
}

export default CommentCreated;