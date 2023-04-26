import styled from "styled-components";
import AnswerDetail from "./AnswerDetail";
import { useState } from "react";
import AnswerCreate from "./AnswerCreate";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const AnswerWrap = styled.div`
    padding-top: 10px;
    height: 100%;
    
    width: 750px;
    display: flex;
    flex-direction: column;
`

const Answerlist = ({ question, isLoggedIn, openModal}) => {

    const [answers, setAnswers] = useState(question.answers);

    const navigate = useNavigate();


    const url_apost = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/answers`
    const headers = { headers :
            {Authorization : `Bearer ${process.env.REACT_APP_NGROK_TOKEN}`
                }};
    
    const addAnswerHandler = (newAnswer) => {
        

        axios.post(url_apost, { "content": newAnswer }, headers)
        .then(res => { console.log("answer patch success!", res) 
        navigate(0);
    })
        .catch(err => { console.log("answer patch fail!", err) });

    }



    const updateAnswerHandler = (answer_id, updateAnswer) => {

    const url_apatch = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/answers/${answer_id}`

        
        axios
            .patch(url_apatch, { "content" : updateAnswer}, headers)
            .then((res) => {
                console.log("update EditAnswer success!", res.answer_id)
            },navigate(0))
            .catch((err)=>{
                console.log("update EditAnswer fail!", err)
            })

            console.log(updateAnswer);
    }

    const deleteAnswerHandler = (answer_id) => {
        console.log('delete clicked!');
    const url_apatch = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/answers/${answer_id}`

      
        //this should be replaced with 'delete'
        axios.delete(url_apatch, headers)
            .then(res => {console.log("delete answer success!")})
            .catch(err => {console.log("delete answer fail!", err)});
    }



    return (
        <>
            <AnswerWrap>
                {answers ? answers.map((answer) => <AnswerDetail
                                                    isLoggedIn={isLoggedIn}
                                                    question={question}
                                                    q_id={question.id}
                                                    answer={answer}
                                                    answers={answers}
                                                    updateAnswerHandler={updateAnswerHandler}
                                                    deleteAnswerHandler={deleteAnswerHandler}
                                                    openModal={openModal}
                                                    key={answer.id}></AnswerDetail>) : null}
            </AnswerWrap>
            <AnswerCreate
                isLoggedIn={isLoggedIn}
                openModal={openModal}
                addAnswerHandler={addAnswerHandler}
            ></AnswerCreate>
        </>
    )
}

export default Answerlist