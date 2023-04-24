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

const Answerlist = ({ question, answersNum}) => {

    const [answers, setAnswers] = useState(question.answers);
    const url_patch = `http://localhost:3001/questions/${question.id}`;

    const addAnswerHandler = (newAnswer) => {

        const newAnswers = answers? [...answers, newAnswer] : [newAnswer];
        if (answers) setAnswers(newAnswers);
        else setAnswers(newAnswers);
        // console.log(newAnswer);
        //patch, add answers

        axios.patch(url_patch, { ...question, "answers": newAnswers })
            .then(res => { console.log("answer patch success!", res) })
            .catch(err => { console.log("answer patch fail!", err) });

    }

    const deleteAnswerHandler = (answer_id) => {
        console.log('delete clicked!');

        const newAnswers = answers.filter(el => el.id !== answer_id);
        setAnswers(newAnswers);
        //this should be replaced with 'delete'
        axios.patch(url_patch, {...question, "answers" : newAnswers})
            .then(res => {console.log("delete answer success!")})
            .catch(err => {console.log("delete answer fail!", err)});
    }

    // setAnswersNum(answersNum - 1);
    // console.log(answers)

    return (
        <>
            <AnswerWrap>
                {answers ? answers.map((answer) => <AnswerDetail
                                                    q_id={question.id}
                                                    answer={answer}
                                                    answers={answers}
                                                    deleteAnswerHandler={deleteAnswerHandler}
                                                    key={answer.id}></AnswerDetail>) : null}
            </AnswerWrap>
            <AnswerCreate
                addAnswerHandler={addAnswerHandler}
                answersNum={answersNum}
            ></AnswerCreate>
        </>
    )
}

export default Answerlist