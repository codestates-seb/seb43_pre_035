import styled from "styled-components";
import {useState} from 'react'
import AnswerCommentInput from "./AnswerCommentInput"


const AddCommentWrap = styled.div`
    padding: 10px;
    width: 750;
    ${'' /* border : 2px solid #FFFFFF; */}
    color: #9D5353;
    cursor: pointer;
    .hover {

    }
`


const AddAnswerComment = ({addAnswerCommentHandler, answerCommentsNum,isLoggedIn}) => {

    const [comment,setComment] = useState(false);

<div> Add a Comment </div>
    return (
        <>
            <AddCommentWrap onClick={()=>{setComment(true)}}>
            {isLoggedIn && comment ? 
            <AnswerCommentInput addAnswerCommentHandler={addAnswerCommentHandler} answerCommentsNum={answerCommentsNum}/> : 
            <div> Add a Comment </div>
            }
            </AddCommentWrap>
        </>
    )
}
export default AddAnswerComment