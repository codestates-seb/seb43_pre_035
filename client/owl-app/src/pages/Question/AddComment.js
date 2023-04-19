import styled, {css} from "styled-components";
import {useState} from 'react'
import CommentInput from "./CommentInput"
import CommentCreated from "./CommentCreated";

const AddCommentWrap = styled.div`
    padding: 10px;
    width: 200px;
    height: 20px;
    cursor: pointer;
    .hover {

    }
`


const AddComment = () => {

    const [comment,setComment] = useState(true)

    const commentHandleClick = ()=>{
        setComment(!comment)
    }

    return (
        <>
            <AddCommentWrap onClick={commentHandleClick}>
            {setComment ? <div>Add a Comment </div> :<CommentInput/>}
            </AddCommentWrap>
        </>
    )
}

export default AddComment