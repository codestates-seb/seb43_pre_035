import styled from "styled-components";
import AnswerDetail from "./AnswerDetail";
import { useState } from "react";
import AnswerCreate from "./AnswerCreate";
import { useNavigate } from "react-router-dom"
import { axiosAuth } from "../../../../src/utils/axiosConfig";

const AnswerWrap = styled.div`
    padding-top: 10px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Answerlist = ({ question, openModal }) => {

    const [answers, setAnswers] = useState(question.answers);

    // const navigate = useNavigate();

    const addAnswerHandler = (newAnswer) => {


        const url_apost = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/answers`


        axiosAuth.post(url_apost, { "content": newAnswer })
            .then(res => {
                console.log("answer patch success!", res);
                setAnswers([...answers, res.data]);
            })
            .catch(err => { console.log("answer patch fail!", err) });

    }



    const updateAnswerHandler = (answer_id, updateAnswer) => {

        const url_apatch = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/answers/${answer_id}`


        axiosAuth
            .patch(url_apatch, { "content": updateAnswer })
            .then(res => {
                console.log("update answer success!")
                setAnswers(answers.map(el => {
                    if(el.answerId === answer_id) el.content = updateAnswer;
                    return el;
                }))
            })
            .catch(err => {
                console.log("update answer fail!", err)
            })
    }

    const deleteAnswerHandler = (answer_id) => {
        // console.log('delete clicked!');
        const url_apatch = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/answers/${answer_id}`

        //this should be replaced with 'delete'
        axiosAuth.delete(url_apatch)
            .then(res => {
                setAnswers([...answers.filter(el => el.answerId !== answer_id)]);
                // navigate(0);
            })
            .catch(err => { console.log("delete answer fail!", err) });
    }


    return (
        <>
            <AnswerWrap>
                {answers ? answers.map((answer) => <AnswerDetail
                    question={question}
                    q_id={question.id}
                    answer={answer}
                    updateAnswerHandler={updateAnswerHandler}
                    deleteAnswerHandler={deleteAnswerHandler}
                    openModal={openModal}
                    key={answer.answerId}></AnswerDetail>) : null}
            </AnswerWrap>
            <AnswerCreate
                openModal={openModal}
                addAnswerHandler={addAnswerHandler}
            ></AnswerCreate>
        </>
    )
}

export default Answerlist