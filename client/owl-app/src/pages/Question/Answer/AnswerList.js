import styled from "styled-components";
import AnswerDetail from "./AnswerDetail";
import { useState } from "react";
import AnswerCreate from "./AnswerCreate";


const AnswerWrap = styled.div`
    padding-top: 10px;
    height: 100%;
    border-bottom : 2px solid #FFFFFF;
    width: 750px;
    display: flex;
    flex-direction: column;
`

const Answerlist = ({question})=>{

    const [answers,setAnswers] = useState(question.answer)
    const addAnswerHandler = (newAnswer) => {
        
        
        setAnswers([...answers,newAnswer])
    }
    console.log(answers)
    
    return (
        <>
        <AnswerWrap>
            {answers.map((answer,idx) => <AnswerDetail answer={answer} key={idx}></AnswerDetail>)}
        </AnswerWrap>
            <AnswerCreate 
            addAnswerHandler={addAnswerHandler}
            ></AnswerCreate>
        </>
        )
}

export default Answerlist