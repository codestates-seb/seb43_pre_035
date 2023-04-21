import styled from "styled-components";
import AddCommentInput from './../Comment/AddCommentInput'
import AnswerCommentList from '../Comment/AnswerCommentList'
import { useState } from "react";


const AnswerBlock = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    color: white;
    z-index: 100;
`

const AnsweruserBlock = styled.div`
    display: flex;
    padding: 10px;
    border-bottom: 1px solid white;
`   

const AnswerContent = styled.div`
    padding: 10px;
    width: 600px;
    color: white;
`
const CreateUserA = styled.div`
    padding-top: 60px;
    width: 130px;
    font-size: 15px;
`


const AnswerDetail = ({answer})=>{
   
    const answerComment = answer.answerReply
    
    const [addanswerComment,setAddAnswerComment] = useState(answerComment)

    console.log(answer.member.displayName)
    

    const answerCommentHandler = (newComment) => {
        setAddAnswerComment([...addanswerComment, newComment])
        }

    
    return (
        <>
        <AnswerBlock>
            <AnsweruserBlock>
                <AnswerContent>{answer.content}</AnswerContent>
                <CreateUserA>{answer.member.displayName}</CreateUserA>
            </AnsweruserBlock>
            <AnswerCommentList addanswerComment={addanswerComment}></AnswerCommentList>
        </AnswerBlock>
        <AddCommentInput answerCommentHandler={answerCommentHandler} ></AddCommentInput>
        </>


        )
}

export default AnswerDetail