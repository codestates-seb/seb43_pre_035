import styled from "styled-components";
import Title from "./Title";
import QuestionContent from "./QuestionContent"
import Answerlist from "./Answer/AnswerList"
import QuestionCommentList from "./Comment/QuestionCommentList";
import AnswerCommentList from './Comment/AnswerCommentList'
import { useState, useEffect } from "react";
import { ClickButton } from "../../styles/UIStyles"
import { axiosAuth } from "../../utils/axiosConfig";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../App";
import { useContext } from 'react';


const SelectedWrap = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;
`
const StyledTextHead = styled.input`
    display: flex;
    border: none;
    resize: none;
    outline: none;
    margin-bottom: 10px;
    padding: 15px 10px;
    overflow: auto;
    border-radius: 10px;
    font-size: 1em;
    font-family: 'TheJamsil', sans-serif;
    font-weight: var(--fonts-weight-regular);
    background: var(--colors-dullbrown);
    color: var(--colors-text-default);

    &::placeholder{
        color: var(--colors-text-placeholder-dark);
        font-weight: var(--fonts-weight-regular);
    }

    &:focus, &:active{
        border: 1px solid var(--colors-yellow);
    }
`
const StyledTextContent = styled.input`
    height: 400px;
    display: flex;
    border: none;
    resize: none;
    outline: none;
    margin-bottom: 10px;
    padding: 15px 10px;
    overflow: auto;
    border-radius: 10px;
    font-size: 1em;
    font-family: 'TheJamsil', sans-serif;
    font-weight: var(--fonts-weight-regular);
    background: var(--colors-dullbrown);
    color: var(--colors-text-default);

    &::placeholder{
        color: var(--colors-text-placeholder-dark);
        font-weight: var(--fonts-weight-regular);
    }

    &:focus, &:active{
        border: 1px solid var(--colors-yellow);
    }
`




const SelectQuestion = ({ question, openModal, dimensionsHandler, refContainer }) => {

    const { isLoggedIn } = useContext(UserContext);
    const url = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}`
    const [getQuestion, setGetQuestion] = useState([question]);
    const [isEditState, setIsEditState] = useState(true);
    const [editTitleQuestion, setEditTitleQuestion] = useState(question.title)
    const [editContentQuestion, setEditContentQuestion] = useState(question.content)
    // console.log(question.title)
    const navigate = useNavigate();

    const onEditTitle = (e) => {
        setEditTitleQuestion(e.target.value)
    }
    const onEditContent = (e) => {
        setEditContentQuestion(e.target.value)
    }

    const updateQHandler = () => {

        axiosAuth.patch(url, {'title': editTitleQuestion, 'content': editContentQuestion})
            .then(res => {
                console.log("res: ", res.data);
                setIsEditState(false);
                navigate(0);
            }
            )
            .catch(err => {console.log(err.message)})
            // 수정으로 바꾸기
    }



    useEffect(() => {
        if (refContainer.current) {
            dimensionsHandler(refContainer.current.offsetWidth, refContainer.current.offsetHeight);
        }
        }, []);

    return (
        <>
            {getQuestion.map((question) =>(
        <SelectedWrap key={question} ref={refContainer}>
            {isEditState ?
                <Title question={question} isLoggedIn={isLoggedIn}></Title>
                : <StyledTextHead
                value={editTitleQuestion}
                onChange={onEditTitle}/>}
            {isEditState ?
                <QuestionContent openModal={openModal}
                isLoggedIn={isLoggedIn}
                question={question}
                setIsEditState={setIsEditState}
                ></QuestionContent>
                : <><StyledTextContent
                            value={editContentQuestion}
                            onChange={onEditContent} />
                            <ClickButton onClick={updateQHandler} >수정하기</ClickButton></>
                    }
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