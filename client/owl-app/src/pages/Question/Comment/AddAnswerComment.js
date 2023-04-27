import styled from "styled-components";
import {useState, useContext} from 'react'
import AnswerCommentInput from "./AnswerCommentInput"
import { UserContext } from "../../../utils/UserContextConfig";
import { AddWrap } from "./CommentStyle";


const AddAnswerComment = ({addAnswerCommentHandler, openModal}) => {

    const { isLoggedIn} = useContext(UserContext);
    const [comment,setComment] = useState(false);

    const loginCheckAnswer = () => {
        if (!isLoggedIn) {openModal(); return;}
        setComment(true);
    }


    return (
        <AddWrap onClick={loginCheckAnswer}>
            {isLoggedIn && comment ?
            <AnswerCommentInput addAnswerCommentHandler={addAnswerCommentHandler}/> :
            <div> Add a Comment </div>
            }
            </AddWrap>
    )
}
export default AddAnswerComment