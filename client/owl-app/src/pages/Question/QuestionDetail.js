import styled from "styled-components";
import SelectQuestion from "./SelectQuestion";
import { initialData } from "../../data/dummyQuestion";
import { useState } from "react";

const QuestionWrap = styled.div`
    padding: 10px;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const QuestionDetail = () => {
    const [questions,setQuestions] = useState(initialData.questions)

    
    
    return (
        <>
        <QuestionWrap>
            {questions.map((question, idx) => <SelectQuestion question={question} key={idx}/>)}
            {/* <SelectQuestion questions={questions}/> */}
        </QuestionWrap>
        </>
    )
}

export default QuestionDetail;