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


const AddComment = ({addCommentHandler, AnswerCommentHandler, isLoggedIn, openModal}) => {

    const [commentAllow,setCommentAllow] = useState(isLoggedIn);

    const loginCheck = () => {
        if (!isLoggedIn) {openModal(); return;}
        setCommentAllow(true);
    }

    return (
        <>
            <AddCommentWrap onClick={loginCheck}>
            {isLoggedIn && commentAllow ?  
            (<CommentInput addCommentHandler={addCommentHandler} />) :
            <div> Add a Comment </div>
            }
            </AddCommentWrap>
        </>
    )
}

export default AddComment