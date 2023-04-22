import styled from "styled-components";
import Title from "./Title";
import QuestionContent from "./QuestionContent"
import Answerlist from "./Answer/AnswerList"
import QuestionCommentList from "./Comment/QuestionCommentList";
import AnswerCommentList from './Comment/AnswerCommentList'
import { useState, useEffect } from "react";
import axios from 'axios'

const SelectedWrap = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;
`




const SelectQuestion = ({question}) => {
    const [getQuestion,setGetQuestion] = useState([question]);
    const [answersNum, setAnswersNum] = useState(question.answers.length);

        // console.log([question])

    return (
        <>
            {getQuestion.map((question) =>(
        <SelectedWrap key={question.id}>
                <Title question={question}></Title>
            <QuestionContent question={question}></QuestionContent>
                <QuestionCommentList  question={question}></QuestionCommentList>
                <Answerlist question={question} answersNum={answersNum}>
                <AnswerCommentList  question={question}></AnswerCommentList>
                </Answerlist>
        </SelectedWrap>
            )
            )}
        </>
    )
}

export default SelectQuestion;