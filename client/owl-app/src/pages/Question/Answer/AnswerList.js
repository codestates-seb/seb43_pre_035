import styled from "styled-components";
import AnswerDetail from "./AnswerDetail";
import { useState } from "react";
import AnswerCreate from "./AnswerCreate";
import axios from 'axios';


const AnswerWrap = styled.div`
    padding-top: 10px;
    height: 100%;
    border-bottom : 2px solid #FFFFFF;
    width: 750px;
    display: flex;
    flex-direction: column;
`

const Answerlist = ({question})=>{

    const [answers,setAnswers] = useState(question.answers);
    const url_patch = `http://localhost:3001/questions/${question.id}`;

    const addAnswerHandler = (newAnswer) => {
        setAnswers([...answers,newAnswer])
        console.log(newAnswer);
        //patch, add answers

        axios.patch(url_patch, {...question, "answers" : [...answers, newAnswer]})
            .then(res => {console.log("answer patch success!", res)})
            .catch(err => {console.log("answer patch fail!", err)});

    }
    // console.log(answers)

    return (
        <>
        <AnswerWrap>
            {answers.map((answer,idx) => <AnswerDetail q_id={question.id} answer={answer} answers={answers} key={idx}></AnswerDetail>)}
        </AnswerWrap>
            <AnswerCreate
            addAnswerHandler={addAnswerHandler}
            ></AnswerCreate>
        </>
        )
}

export default Answerlist