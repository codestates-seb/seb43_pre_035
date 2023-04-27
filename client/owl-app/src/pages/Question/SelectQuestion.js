import styled from "styled-components";
import Title from "./Title";
import QuestionContent from "./QuestionContent"
import Answerlist from "./Answer/AnswerList"
import QuestionCommentList from "./Comment/QuestionCommentList";
import AnswerCommentList from './Comment/AnswerCommentList'
import { useState, useEffect, useContext } from "react";
import { ClickButton } from "../../styles/UIStyles"
import { axiosAuth } from "../../utils/axiosConfig";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../utils/UserContextConfig";
import { CancelButton} from '../Question/Answer/AnswerStyle';

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
    white-space: pre-wrap;

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
    white-space: pre-line;

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

    // console.log(isLoggedIn)

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
            })
            .catch(err => {console.log(err.message)})
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
                <Title question={question} isLoggedIn={isLoggedIn} openModal={openModal}></Title>
                : <StyledTextHead
                value={editTitleQuestion}
                onChange={onEditTitle}/>}
            {isEditState ?
               ( <QuestionContent openModal={openModal}
                question={question}
                setIsEditState={setIsEditState}
                ></QuestionContent>)
                :
                     <>
                        <StyledTextContent
                          value={editContentQuestion}
                         onChange={onEditContent} />
                          <ClickButton onClick={updateQHandler} >수정하기</ClickButton>
                          <CancelButton onClick={()=>setIsEditState(true)}>취소하기</CancelButton>
                    </>
                    }
                    <QuestionCommentList
                        question={question}
                        openModal={openModal}></QuestionCommentList>
                    <Answerlist
                        openModal={openModal}
                        question={question}
                        >
                        <AnswerCommentList
                            openModal={openModal}
                            question={question}></AnswerCommentList>
                    </Answerlist>

                </SelectedWrap>
            )
            )}
        </>
    )
}

export default SelectQuestion;