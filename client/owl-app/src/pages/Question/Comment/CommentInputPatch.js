import styled from "styled-components";
import {useState,useEffect} from "react"
import { CommentButtonBlock,CreateButtonLogin,CancelButton} from '../Answer/AnswerStyle'


const CommentInputWrap = styled.div`
    padding: 10px;
    width: 750px;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CommentInputCompo = styled.input`
    padding: 10px;
    width: 700px;
    height: 40px;
    border: 1px solid #E7CC8F;
    background-color: #493E3B;
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

const CommentInputPatch = ({ updatedContent, setUpdatedContent, editClickHandler, setIsEditable})=>{
    const [newCommentContent, setNewCommentContent] = useState(updatedContent);
    const [invalidComment, setInvalidComment] = useState(false);



    const onTextChange = (e) => {
        setNewCommentContent(e.target.value);
        setUpdatedContent(e.target.value);
      };


    const onClickCommentSubmit = (e) => {
        e.stopPropagation();
        // console.log("comment content: ", newCommentContent);
        if (!newCommentContent) {console.log("no content!"); setInvalidComment(true); return;};
        setUpdatedContent(newCommentContent);
        editClickHandler();
        setInvalidComment(false);
        setIsEditable(false);
    }


    return (
        <>
        <CommentInputWrap>
            {invalidComment ? <div>내용이 없습니다</div>: null}
            <CommentInputCompo type="text" placeholder="Comment를 달아주세요"
            onChange={onTextChange}
            value={updatedContent}
            />
            <CommentButtonBlock>

            <CreateButtonLogin onClick={onClickCommentSubmit}>수정하기</CreateButtonLogin>
            <CancelButton onClick={()=>setIsEditable(false)}>취소하기</CancelButton>
            </CommentButtonBlock>
        </CommentInputWrap>
        </>
    )
}

export default CommentInputPatch;