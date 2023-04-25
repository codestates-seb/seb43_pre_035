import styled from "styled-components";
import AnswerDetail from "./AnswerDetail";
import { useState } from "react";
import AnswerCreate from "./AnswerCreate";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const AnswerWrap = styled.div`
    padding-top: 10px;
    height: 100%;
    border-bottom : 2px solid #FFFFFF;
    width: 750px;
    display: flex;
    flex-direction: column;
`

const Answerlist = ({ question, isLoggedIn, openModal}) => {

    const [answers, setAnswers] = useState(question.answers);

    const navigate = useNavigate();

    // const url_patch = `http://localhost:3001/questions/${question.id}`;
    const url_apost = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/answers`
    const url_apatch = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/answers`

    const addAnswerHandler = (newAnswer) => {

        // const newAnswers = answers? [...answers, newAnswer] : [newAnswer];
        // if (answers) setAnswers(newAnswers);
        // else setAnswers(newAnswers);

        //patch, add answers
        
        const headers = { headers :
            {Authorization : `Bearer ${process.env.REACT_APP_NGROK_TOKEN}`
        }
        };

        axios.post(url_apost, { "content": newAnswer }, headers)
        .then(res => { console.log("answer patch success!", res) 
        navigate(0);
    })
        .catch(err => { console.log("answer patch fail!", err) });
        
        
        console.log(newAnswer);
        // json.server
        // axios.patch(url_patch, { ...question, "answers": newAnswers })
        //     .then(res => { console.log("answer patch success!", res) })
        //     .catch(err => { console.log("answer patch fail!", err) });

    }


    // const loginCheck = () => {
    //     if (!isLoggedIn) {openModal()};
    // }

    const updateAnswerHandler = (answer_id, updateAnswer) => {
        const editAnswer = answers.map((el) =>{
            if (el.id === answer_id) el.content = updateAnswer;
            return el
        })
        setAnswers(editAnswer)
        console.log("제발:" ,editAnswer)

        axios
            .patch(url_apatch, { ...question, "answers" : editAnswer})
            .then((res) => {
                console.log("update EditAnswer success!", res)
            })
            .catch((err)=>{
                console.log("update EditAnswer fail!", err)
            })

    }

    const deleteAnswerHandler = (answer_id) => {
        console.log('delete clicked!');

        const newAnswers = answers.filter(el => el.id !== answer_id);
        setAnswers(newAnswers);
        //this should be replaced with 'delete'
        axios.patch(url_apatch, {...question, "answers" : newAnswers})
            .then(res => {console.log("delete answer success!")})
            .catch(err => {console.log("delete answer fail!", err)});
    }

    // setAnswersNum(answersNum - 1);
    // console.log(answers)

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