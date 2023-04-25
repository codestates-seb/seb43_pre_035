import styled from "styled-components";
import Title from "./Title";
import QuestionContent from "./QuestionContent"
import Answerlist from "./Answer/AnswerList"
import QuestionCommentList from "./Comment/QuestionCommentList";
import AnswerCommentList from './Comment/AnswerCommentList'
import { useState, useEffect } from "react";
import SideNav from "../../components/SideNav";

const SelectedWrap = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;
`




const SelectQuestion = ({question,isLoggedIn,openModal, dimensionsHandler, refContainer}) => {
    const [getQuestion,setGetQuestion] = useState([question]);
        console.log([question])

    // useEffect(() => {
    //     if (refContainer.current) {
    //         dimensionsHandler(refContainer.current.offsetWidth, refContainer.current.offsetHeight);
    //     }
    //     }, []);

    return (
        <>
            {getQuestion.map((question) =>(
        <SelectedWrap key={question} ref={refContainer}>
                <Title question={question} isLoggedIn={isLoggedIn}></Title>
                <QuestionContent openModal={openModal}
                isLoggedIn={isLoggedIn}
                question={question}></QuestionContent>

                <QuestionCommentList
                isLoggedIn={isLoggedIn}
                question={question}
                openModal={openModal}></QuestionCommentList>
                <Answerlist
                openModal={openModal}
                question={question}
                isLoggedIn={isLoggedIn}>
                <AnswerCommentList
                openModal={openModal}
                isLoggedIn={isLoggedIn}
                question={question}></AnswerCommentList>
                </Answerlist>
        </SelectedWrap>
            )
            )}
        </>
    )
}

export default SelectQuestion;