import styled from "styled-components";
import AnswerDetail from "./AnswerDetail";
import { useState,useEffect } from "react";
import AnswerCreate from "./AnswerCreate";
import AddComment from "../Comment/AddComment";
import { initialData } from "../../../data/dummyQuestion";

const AnswerWrap = styled.div`
    padding-top: 10px;
    border-bottom : 2px solid #FFFFFF;
    width: 750px;
    display: flex;
    flex-direction: column;
`

const Answerlist = ({question,setQuestion})=>{

    const [answers,setAnswers] = useState(question.answer)

    // setanswer add 만들기
    const addAnswerHandler = (newAnswer) => {
        setAnswers([...answers, newAnswer])
        }

    
    return (
        <>
        <AnswerWrap>
            {answers.map((answer,idx) => <AnswerDetail answer={answer} key={idx}><AddComment/></AnswerDetail>)}
            <AddComment/>
        </AnswerWrap>
            <AnswerCreate 
            addAnswerHandler={addAnswerHandler}
            ></AnswerCreate>
        </>
        )
}

export default Answerlist
