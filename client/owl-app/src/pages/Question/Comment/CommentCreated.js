import { Button } from "react-bootstrap"
import styled from "styled-components"
import { UpdateButton } from "../../../styles/UIStyles";
import { useState } from "react";
import CommentInputPatch from "./CommentInputPatch";
import AnswerCommentInputPatch from "./AnswerCommentInputPatch";


const CommentWrap = styled.div`
    padding: 10px;
    padding-left: 50px;
    width: 750px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid white;
    color: #DACC96;
`

const CommentDetail = styled.div`
    padding: 10px;
    width: 60vw;
`

const CommentUser = styled.div`
    padding: 10px;
    width: 20vw;
`

const CommentDate = styled.div`
    padding: 10px;
    width: 20vw;
`

const CommentCreated = ({comment, commentType, deleteAnswerCommentHandler, updateQuestionCommentHandler, updateAnswerCommentHandler})=>{

    const  [isEditable,setIsEditable] = useState(false);
    const  [updatedContent, setUpdatedContent] = useState(comment.content);


    const deleteClickHandler = (e) => {
        e.stopPropagation();
        console.log("comment delete clicked!");
        deleteAnswerCommentHandler(comment.id);
    }

    const editClickHandler = () => {
        console.log("comment update clicked!");
        setIsEditable(true);
        if (commentType==='qComment') updateQuestionCommentHandler(comment.id, updatedContent);
        if (commentType==='aComment') updateAnswerCommentHandler(comment.id, updatedContent);
    }


    return(
        <>
            {isEditable? (commentType === 'qComment' ? <CommentInputPatch updatedContent={updatedContent}
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
                            <CommentDate>{comment.updateDate}</CommentDate>
                            <UpdateButton onClick={editClickHandler}>수정
                            </UpdateButton>
                            <UpdateButton onClick={deleteClickHandler}>삭제</UpdateButton>
                        </CommentWrap>
            }
        </>

    )
}

export default CommentCreated;