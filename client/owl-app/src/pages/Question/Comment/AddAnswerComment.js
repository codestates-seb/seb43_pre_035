import styled from "styled-components";
import {useState} from 'react'
import AnswerCommentInput from "./AnswerCommentInput"
import { UserContext } from "../../../App";
import { useContext } from 'react';

const AddCommentWrap = styled.div`
    padding: 10px;
    width: 750;
    ${'' /* border : 2px solid #FFFFFF; */}
    color: #9D5353;
    cursor: pointer;
    .hover {

    }
`


const AddAnswerComment = ({addAnswerCommentHandler, openModal}) => {

    const { isLoggedIn} = useContext(UserContext);
    const [comment,setComment] = useState(false);

    const loginCheckAnswer = () => {
        if (!isLoggedIn) {openModal(); return;}
        setComment(true);
    }


    return (
        <>
        <AddCommentWrap onClick={loginCheckAnswer}>
            {isLoggedIn && comment ?
            <AnswerCommentInput addAnswerCommentHandler={addAnswerCommentHandler}/> :
            <div> Add a Comment </div>
            }
            </AddCommentWrap>
        </>
    )
}
export default AddAnswerComment