import styled from "styled-components";
import AnswerDetail from "./AnswerDetail";
import { useState } from "react";

const AnswerWrap = styled.div`
    padding-top: 10px;
    border-bottom : 2px solid #FFFFFF;
    width: 750px;
    height: 245px;
    display: flex;
    
`

const Answerlist = ({question})=>{

    const [answers,setAnswers] = useState(question.answer)
    
    return (
        <AnswerWrap>
            {answers.map((answer,idx) => <AnswerDetail answers={answer} key={idx}/>)}
        </AnswerWrap>

        )
}

export default Answerlist
