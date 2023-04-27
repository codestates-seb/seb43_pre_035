import styled from "styled-components"
import { UpdateButton } from "../../../styles/UIStyles";
import { useState } from "react";
import CommentInputPatch from "./CommentInputPatch";
import AnswerCommentInputPatch from "./AnswerCommentInputPatch";
import { UserContext } from "../../../utils/UserContextConfig";
import { useContext } from 'react';
import * as CommentStyle from './CommentStyle';


const convertDate = (string) => {
    return `${string.substring(0, 4)}년 ${String(Number(string.substring(5, 7)))}월 ${String(Number(string.substring(8, 10)))}일`
}

const CommentCreated = ({ comment, commentType, deleteAnswerCommentHandler, updateQuestionCommentHandler, updateAnswerCommentHandler, deleteQuestionCommentHandler, openModal }) => {

    const [isEditable, setIsEditable] = useState(false);
    const [updatedContent, setUpdatedContent] = useState(comment.content);
    const { memberId, isLoggedIn } = useContext(UserContext);

    const deleteClickHandler = (e) => {
        e.stopPropagation();
        // console.log("comment delete clicked!");
        if (!isLoggedIn) { openModal(); return; };
        if (commentType === 'qComment') deleteQuestionCommentHandler(comment.questionReplyId);
        if (commentType === 'aComment') deleteAnswerCommentHandler(comment.answerReplyId);

    }

    const editClickHandler = () => {
        // console.log("comment update clicked!");
        if (!isLoggedIn) { openModal(); return };
        if (commentType === 'qComment') updateQuestionCommentHandler(comment.questionReplyId, updatedContent);
        if (commentType === 'aComment') updateAnswerCommentHandler(comment.answerReplyId, updatedContent);

    }



    return (
        <>
            {isEditable ? (commentType === 'qComment' ? <CommentInputPatch
                updatedContent={updatedContent}
                setUpdatedContent={setUpdatedContent}
                editClickHandler={editClickHandler}
                setIsEditable={setIsEditable} /> :
                <AnswerCommentInputPatch updatedContent={updatedContent}
                    setUpdatedContent={setUpdatedContent}
                    editClickHandler={editClickHandler}
                    setIsEditable={setIsEditable} />) :
                <>
                    <CommentStyle.Wrap>
                        <CommentStyle.Content>
                            <div>
                                {updatedContent}
                            </div>

                            {memberId === comment.member.memberId ?
                                <CommentStyle.EditButtons>
                                    <UpdateButton onClick={() => { setIsEditable(true) }}>수정
                                    </UpdateButton>
                                    <UpdateButton onClick={deleteClickHandler}>삭제</UpdateButton>
                                </CommentStyle.EditButtons> : null}
                        </CommentStyle.Content>

                        <CommentStyle.Info>
                            <CommentStyle.User>{comment.member.displayName}</CommentStyle.User>
                            <CommentStyle.Date>{convertDate(comment.updateDate)}</CommentStyle.Date>
                        </CommentStyle.Info>
                    </CommentStyle.Wrap>

                </>
            }
        </>

    )
}

export default CommentCreated;