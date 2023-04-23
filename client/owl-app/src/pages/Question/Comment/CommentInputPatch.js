import styled from "styled-components";
import {useState,useEffect} from "react"

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
    const [invalidComment, setInvalidComment] = useState(true);
    
    
    // useEffect (()=>{
    //     console.log("Comment 내용", newCommentContent)
    // },[newCommentContent])

    const onTextChange = (e) => {
        setNewCommentContent(e.target.value);
        setUpdatedContent(e.target.value);
      };


    const onClickCommentSubmit = (e) => {
        e.stopPropagation();
        console.log("comment content: ", newCommentContent);
        if (!newCommentContent) {console.log("no content!"); setInvalidComment(true); return;};
        // let newComment = {
        //     "content" : newCommentContent,
        // }
        
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
            <CreatButton onClick={onClickCommentSubmit}>수정하기</CreatButton>
        </CommentInputWrap>
        </>
    )
}

export default CommentInputPatch;