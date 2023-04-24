import styled from "styled-components";
import {useState} from 'react'
import CommentInput from "./CommentInput"


const AddCommentWrap = styled.div`
    padding: 10px;
    width: 750;
    ${'' /* border : 2px solid #FFFFFF; */}
    color: #9D5353;
    cursor: pointer;
    .hover {

    }
`


const AddComment = ({addCommentHandler,AnswerCommentHandler, qCommentNum,isLoggedIn}) => {

    const [comment,setComment] = useState(false);


    return (
        <>
            <AddCommentWrap onClick={()=>{setComment(true)}}>
            {isLoggedIn && comment ?  
            (<CommentInput addCommentHandler={addCommentHandler} qCommentNum={qCommentNum}/>) :
             <div> Add a Comment </div>}

            </AddCommentWrap>
        </>
    )
}

export default AddComment