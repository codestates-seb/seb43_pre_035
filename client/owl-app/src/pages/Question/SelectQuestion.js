import styled from "styled-components";
import Title from "./Title";
import QuestionContent from "./QuestionContent"
import Answerlist from "./Answer/AnswerList"
import QuestionCommentList from "./Comment/QuestionCommentList";
import AnswerCommentList from './Comment/AnswerCommentList'
import { useState, useEffect } from "react";
import axios from 'axios'
import SideNav from "../../components/SideNav";

const SelectedWrap = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;
`




const SelectQuestion = ({question,isLoggedIn,openModal}) => {
    const [getQuestion,setGetQuestion] = useState([question]);
    // const answersNum = question.answers?.length;
        console.log([question])


    return (
        <>
            {getQuestion.map((question) =>(
        <SelectedWrap key={question}>
                <Title question={question}></Title>
                <QuestionContent openModal={openModal}
                isLoggedIn={isLoggedIn}
                question={question}></QuestionContent>

                <QuestionCommentList 
                isLoggedIn={isLoggedIn} 
                question={question}
                openModal={openModal}></QuestionCommentList>
                <Answerlist 
                openModal={openModal}
                question={question}
                isLoggedIn={isLoggedIn}>
                <AnswerCommentList  
                openModal={openModal}
                isLoggedIn={isLoggedIn}
                question={question}></AnswerCommentList>
                </Answerlist>
        </SelectedWrap>
            )
            )}
        </>
    )
}

export default SelectQuestion;