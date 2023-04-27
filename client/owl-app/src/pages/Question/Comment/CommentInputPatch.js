import styled from "styled-components";
import { useState } from "react"
import { CommentButtonBlock, CreateButtonLogin, CancelButton } from '../Answer/AnswerStyle'
import { InputWrap, InputTextArea, InvalidError, ReviseSubmitBtn, Wrap } from './CommentStyle';


const ReviseWrap = styled(Wrap)`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 20px;
`



const EditCancelBtn = styled(ReviseSubmitBtn)`
    padding: 0 10px;
    ${'' /* height: 16px !important; */}
`

const CommentInputPatch = ({ updatedContent, setUpdatedContent, editClickHandler, setIsEditable }) => {
    const [newCommentContent, setNewCommentContent] = useState(updatedContent);
    const [invalidComment, setInvalidComment] = useState(false);



    const onTextChange = (e) => {
        setNewCommentContent(e.target.value);
        setUpdatedContent(e.target.value);
    };


    const onClickCommentSubmit = (e) => {
        e.stopPropagation();
        // console.log("comment content: ", newCommentContent);
        if (!newCommentContent) { console.log("no content!"); setInvalidComment(true); return; };
        setUpdatedContent(newCommentContent);
        editClickHandler();
        setInvalidComment(false);
        setIsEditable(false);
    }


    return (
        <ReviseWrap>
            <InputWrap>
                <InputTextArea type="text" placeholder="Comment를 달아주세요"
                    onChange={onTextChange}
                    value={updatedContent}
                />
                <CommentButtonBlock>
                    <EditCancelBtn onClick={onClickCommentSubmit}>수정</EditCancelBtn>
                    <EditCancelBtn onClick={() => setIsEditable(false)}>취소</EditCancelBtn>
                </CommentButtonBlock>
            </InputWrap>
            {invalidComment ? <InvalidError>내용이 없습니다</InvalidError> : null}

        </ReviseWrap>
    )
}

export default CommentInputPatch;