import styled from "styled-components";
import Title from "./Title";
import QuestionContent from "./QuestionContent"
import Answerlist from "./Answer/AnswerList"
import CommentList from "./Comment/CommentList";
import AnswerCommentList from './Comment/AnswerCommentList'
import { useState,useEffect } from "react";
import axios from 'axios'

const SelectedWrap = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;
`




const SelectQuestion = ({question}) => {
    const [getQuestion,setGetQuestion] = useState([question])

        // console.log([question])
    
    return (
        <>
            {getQuestion.map((question) =>(
        <SelectedWrap>
                <Title question={question}></Title>
            <QuestionContent question={question}></QuestionContent>
                <CommentList  question={question}></CommentList>
                <Answerlist question={question}>
                <AnswerCommentList  question={question}></AnswerCommentList>
                </Answerlist>
        </SelectedWrap>
            )
            )}
        </>
    )
}

export default SelectQuestion;