import styled from "styled-components";
import {useState} from 'react'
import AddCommentInput from "./AnswerCommentInput"


const AddCommentWrap = styled.div`
    padding: 10px;
    width: 750;
    ${'' /* border : 2px solid #FFFFFF; */}
    color: #9D5353;
    cursor: pointer;
    .hover {

    }
`


const AddAnswerComment = ({answerCommentHandler}) => {

    const [comment,setComment] = useState(true);


    return (
        <>
            <AddCommentWrap onClick={()=>{setComment(false)}}>
            {comment ? <div> Add a Comment </div> :<AddCommentInput answerCommentHandler={answerCommentHandler}/>}
            </AddCommentWrap>
        </>
    )
}

export default AddAnswerComment