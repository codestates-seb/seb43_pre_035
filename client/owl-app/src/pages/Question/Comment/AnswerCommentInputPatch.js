import styled from "styled-components";
import React, { useState } from "react"
import { CommentButtonBlock, CreateButtonLogin, CancelButton } from '../Answer/AnswerStyle'
import { InputWrap, InputTextArea, InvalidError, ReviseSubmitBtn, Wrap } from './CommentStyle';


const PatchContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const ReviseWrap = styled(Wrap)`
    display: flex;
    width: 100%;
    padding: 0 20px;
    justify-content: space-between;
    flex-direction: column;
`

const ErrorContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding-left: 20px;
    ${'' /* background: black; */}

`

const EditCancelBtn = styled(ReviseSubmitBtn)`
    padding: 0 10px;
    ${'' /* height: 16px !important; */}
`

const AnswerCommentInputPatch = ({ updatedContent, setUpdatedContent, editClickHandler, setIsEditable }) => {

    const [answerCommentContent, setAnswerCommentContent] = useState(updatedContent);
    const [invalidComment, setInvalidComment] = useState(false);


    const onTextChange = (e) => {
        setAnswerCommentContent(e.target.value);
        setUpdatedContent(e.target.value);
    };

    const onClickCommentSubmit = (e) => {
        if (e) e.stopPropagation();
        // console.log("this is onclickCommentSubmit!");
        // console.log("answer content: ", answerCommentContent);
        if (!answerCommentContent) { console.log("no content!"); setInvalidComment(true); return; }

        setUpdatedContent(answerCommentContent);
        editClickHandler();
        setInvalidComment(false);
        setIsEditable(false);
    }


    const handleKeyPress = (e) => {
        // e.stopPropagation();
        if (e.keyCode === 13 && e.shiftKey){
            console.log('pressed!');
        }
        else if (e.keyCode === 13 || e.which === 13){
            onClickCommentSubmit();
        }
    }

    return (
        <PatchContainer>
        <ReviseWrap>
            <InputWrap>
                <InputTextArea type="text"
                    placeholder="Comment를 달아주세요"
                    value={answerCommentContent}
                    onChange={onTextChange}
                    onKeyDown={handleKeyPress}
                />
                <CommentButtonBlock>
                    <EditCancelBtn onClick={onClickCommentSubmit}>수정</EditCancelBtn>
                    <EditCancelBtn onClick={() => setIsEditable(false)}>취소</EditCancelBtn>
                </CommentButtonBlock>
            </InputWrap>
        </ReviseWrap>
        <ErrorContainer>
        {invalidComment ? <div>내용을 적어주셔야 합니다.</div> : null}
        </ErrorContainer>


        </PatchContainer>
    )
}

export default AnswerCommentInputPatch;