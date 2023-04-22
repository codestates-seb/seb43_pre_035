import styled from "styled-components";
import SelectQuestion from "./SelectQuestion";
import { initialData } from "../../data/dummyQuestion";
import { useState,useEffect } from "react";
import{ useParams } from "react-router-dom";
import axios from 'axios'
import useFetch from "../../utils/useFetch";



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
    
    // const [question,setQuestion] = useState(initialData.questions[0])
    const url = `http://localhost:3001/questions/1`
    // const { id } = useParams();

    const [question, isPending, error] = useFetch(url)

    
    
    return (
        <>
        <QuestionWrap>
            {isPending && <div>로딩중..</div>}
                {error && <div>eroor</div>}
                {question && (
                    <SelectQuestion question={question} />
                )
                }
            {/* <SelectQuestion questions={questions}/> */}
        </QuestionWrap>
    </>
    )
}

export default QuestionDetail;