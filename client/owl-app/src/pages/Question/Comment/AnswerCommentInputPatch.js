import styled from "styled-components";
import React,{useState} from "react"
import { CommentButtonBlock,CreateButtonLogin,CancelButton} from '../Answer/AnswerStyle'

const CommentInputWrap = styled.div`
    padding: 10px;
    width: 750px;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CommentInputCompo = styled.textarea`
    padding: 10px;
    width: 700px;
    height: 40px;
    border: 1px solid #E7CC8F;
    background-color: #493E3B;
    white-space: pre-wrap;
    .placeholder{
        color : white;
    }
    ::-webkit-scrollbar {
     display: none;
}
`

const CreatButton = styled.button`
    padding: 10px;
    width: 100px;
    height: 30px;
    color: white;
    border: 1px solid white;
    background-color: #BF8B67;
`

const AnswerCommentInputPatch = ({updatedContent, setUpdatedContent, editClickHandler, setIsEditable})=>{

    const [answerCommentContent, setAnswerCommentContent] = useState(updatedContent);
    const [invalidComment, setInvalidComment] = useState(false);


    const onTextChange = (e) => {
        setAnswerCommentContent(e.target.value);
        setUpdatedContent(e.target.value);
      };

    const onClickCommentSubmit = (e) => {
        e.stopPropagation();
        // console.log("this is onclickCommentSubmit!");
        // console.log("answer content: ", answerCommentContent);
        if (!answerCommentContent) {console.log("no content!"); setInvalidComment(true); return;}

        setUpdatedContent(answerCommentContent);
        editClickHandler();
        setInvalidComment(false);
        setIsEditable(false);
    }

    return (
        <>
        <CommentInputWrap>
            {invalidComment ? <div>내용을 적어주셔야 합니다.</div> : null}
            <CommentInputCompo type="text"
                                placeholder="Comment를 달아주세요"
                                value={answerCommentContent}
                                onChange={onTextChange}
            />
            <CommentButtonBlock>
            <CreateButtonLogin onClick={onClickCommentSubmit}>수정하기</CreateButtonLogin>
            <CancelButton onClick={()=>setIsEditable(false)}>취소하기</CancelButton>
            </CommentButtonBlock>
        </CommentInputWrap>
        </>
    )
}

export default AnswerCommentInputPatch;