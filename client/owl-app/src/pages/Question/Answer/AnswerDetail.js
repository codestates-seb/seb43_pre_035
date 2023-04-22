import styled from "styled-components";
import AddAnswerComment from "../Comment/AddAnswerComment";
import AnswerCommentList from '../Comment/AnswerCommentList'
import { useState } from "react";
import axios from 'axios';


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


const AnswerDetail = ({q_id, answer, answers})=>{

    const [addanswerComment,setAddAnswerComment] = useState((answer.answerReplies ? answer.answerReplies : []));
    const url_patch = `http://localhost:3001/questions/${q_id}`;
    console.log(answer.member.displayName)

    const answerCommentHandler = (newComment) => {

        setAddAnswerComment([...addanswerComment, newComment]);
        const newAnswerReplies = [...addanswerComment, newComment]; //set함수는 다음렌더링되서야 업데이트를 하기 때문에!

        const newAnswers = answers.map(el => {
            // console.log("date: ", el.createdDate); //date를 나중에 id로 대치!
            if (el.createdDate === answer.createdDate){
                if (el.answerReplies) {
                    el.answerReplies = [...newAnswerReplies];
                }
                // console.log("result:", el.answerReplies);
            }
            return el;
        });



        if (answer.answerReplies){
            axios.patch(url_patch, {"answers" : newAnswers})
                .then(res => {console.log("answerReplies patch success!", res)})
                .catch(err => {console.log("answerReplies patch fail!", err)})
        }else{
            console.log("there are no answerReplies ready!"); //이럴 경우는 없을 듯!
        }

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
        <AddAnswerComment answerCommentHandler={answerCommentHandler} ></AddAnswerComment>
        </>


        )
}

export default AnswerDetail