import styled from "styled-components";
import Title from "./Title";
import QuestionContent from "./QuestionContent"
import Answerlist from "./Answer/AnswerList"
import QuestionCommentList from "./Comment/QuestionCommentList";
import AnswerCommentList from './Comment/AnswerCommentList'
import { useState, useEffect } from "react";
import SideNav from "../../components/SideNav";
import FormInput from "../../components/ask/FormInput";
import { ClickButton } from "../../styles/UIStyles"
import axios from "axios";

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
const StyledTextContent = styled.textarea`
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




const SelectQuestion = ({ question, isLoggedIn, openModal, dimensionsHandler, refContainer }) => {
    const url = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}`
    const [getQuestion, setGetQuestion] = useState([question]);
    const [isEditState, setIsEditState] = useState(true);
    const [editTitleQuestion, setEditTitleQuestion] = useState(question.title)
    const [editContentQuestion, setEditContentQuestion] = useState(question.content)
    // console.log(editQuestion)

    const onEditTitle = (e) => {
        setEditTitleQuestion(e.target.value)
        console.log(e.target.value)
    }
    const onEditContent = (e) => {
        setEditContentQuestion(e.target.value)
    }
    const headers = {
        headers:
            { Authorization: `Bearer ${process.env.REACT_APP_NGROK_TOKEN}` }
    };

    const updateQHandler = () => {

        axios.patch(url, { 'title': editTitleQuestion, 'content': editContentQuestion }, headers)
            .then(res => { console.log("res: ", res.data) })
            .catch(err => { console.log(err.message) })
        // 수정으로 바꾸기
    }

    useEffect(() => {
        if (refContainer.current) {
            dimensionsHandler(refContainer.current.offsetWidth, refContainer.current.offsetHeight);
        }
        }, []);

    return (
        <>
            {getQuestion.map((question) => (
                <SelectedWrap key={question} ref={refContainer}>
                    {isEditState ?
                        <Title question={question} isLoggedIn={isLoggedIn}></Title>
                        : <StyledTextHead
                            value={editTitleQuestion.title}
                            onChange={onEditTitle} />}
                    {isEditState ?
                        <QuestionContent openModal={openModal}
                            isLoggedIn={isLoggedIn}
                            question={question}
                            setIsEditState={setIsEditState}
                        ></QuestionContent>
                        : <><StyledTextContent
                            value={editContentQuestion.content}
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