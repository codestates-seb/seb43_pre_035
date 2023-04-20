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

    const [question,setQuestion] = useState(initialData.questions[0])



    // useEffect(()=>{

    

    // } ,[questions])
    
    return (
    <>
        <QuestionWrap>
            <SelectQuestion question={question}
            setQuestion={setQuestion} />
            {/* <SelectQuestion questions={questions}/> */}
        </QuestionWrap>
    </>
    )
}

export default QuestionDetail;