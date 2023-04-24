import styled from "styled-components";
import SelectQuestion from "./SelectQuestion";
import { initialData } from "../../data/dummyQuestion";
import { useState,useEffect } from "react";
import{ useParams } from "react-router-dom";
import axios from 'axios'
import useFetch from "../../utils/useFetch";
import SideNav from "../../components/SideNav";



const QuestionWrap = styled.div`
    padding: 10px;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`

const QuestionDetail = ({toggleLogin, sidebarStatus, setSidebarStatus, isLoggedIn}) => {

    // const [question,setQuestion] = useState(initialData.questions[0])
    const { id } = useParams();
    const url = `http://localhost:3001/questions/${id}`;

    // const [question,setQuestion] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);
    const [question, isPending, error] = useFetch(url);
    // useEffect(()=>{

    // },[])
    // axios.get(url)
    //     .then(res => {
    //         console.log(res.data)
    //         setQuestion(res.data)
    //         setIsPending(true)
    //         setError(null)
    //         })

    // console.log(question)

    // if (isPending) return <div>로딩중..</div>;
    // if (error) return <div>에러가 발생했습니다</div>;
    // if (!question) return null;



    return (
        <>
        <QuestionWrap>
        <SideNav    toggleLogin={toggleLogin}
                    sidebarStatus={sidebarStatus}                                      
                    setSidebarStatus={setSidebarStatus}                                                       
                ></SideNav>
            {isPending && <div>로딩중..</div>}
                {error && <div>error</div>}
                {question && (
                    <SelectQuestion question={question} isLoggedIn={isLoggedIn} />
                )
                }
            {/* <SelectQuestion questions={questions}/> */}
        </QuestionWrap>
    </>
    )
}

export default QuestionDetail;