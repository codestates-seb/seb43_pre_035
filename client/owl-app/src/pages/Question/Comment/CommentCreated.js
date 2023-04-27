import styled from "styled-components"
import { UpdateButton } from "../../../styles/UIStyles";
import { useState } from "react";
import CommentInputPatch from "./CommentInputPatch";
import { UserContext } from "../../../utils/UserContextConfig";
import { useContext } from 'react';
import * as CommentStyle from './CommentStyle';
import { formatDate } from "../../../styles/DateComponent";


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
            {isEditable ? (<CommentInputPatch
                updatedContent={updatedContent}
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
                            <CommentStyle.Date>{formatDate(comment.updateDate)}</CommentStyle.Date>
                        </CommentStyle.Info>
                    </CommentStyle.Wrap>

                </>
            }
        </>

    )
}

export default CommentCreated;