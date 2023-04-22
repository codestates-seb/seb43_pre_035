import styled from "styled-components";
import {useState} from 'react'
import CommentInput from "./CommentInput"


const AddCommentWrap = styled.div`
    padding: 10px;
    width: 750;
    border : 2px solid #FFFFFF;
    color: #9D5353;
    cursor: pointer;
    .hover {

    }
`


const AddComment = ({addCommentHandler,AnswerCommentHandler}) => {

    const [comment,setComment] = useState(true);


    return (
        <>
            <AddCommentWrap onClick={()=>{setComment(false)}}>
            {comment ? <div> Add a Comment </div> :<CommentInput addCommentHandler={addCommentHandler}/>}
            </AddCommentWrap>
        </>
    )
}

export default AddComment