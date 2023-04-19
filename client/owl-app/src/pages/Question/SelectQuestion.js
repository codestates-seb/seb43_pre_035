import styled from "styled-components";
import Title from "./Title";
import QuestionContent from "./QuestionContent"
import AddComment from "./Comment/AddComment"
import Answerlist from "./Answer/AnswerList"
import AnswerCreate from "./Answer/AnswerCreate";
import CommentCreated from './Comment/CommentCreated';
import CommentList from "./Comment/CommentList";

const SelectedWrap = styled.div`
    padding: 10px;
    top : 500px;
    color: white;
`


const AskanyTingButton = styled.button`
    border-radius: 1px;
    color: white;
`

const SelectQuestion = ({question}) => {


    return (
        <>
        <SelectedWrap>
            <AskanyTingButton></AskanyTingButton>
                <Title question={question}></Title>
            <QuestionContent question={question}></QuestionContent>
            <CommentList  question={question}></CommentList>
            <AddComment></AddComment>
            <Answerlist question={question}></Answerlist>
            <AddComment></AddComment>
            <AnswerCreate></AnswerCreate>
        </SelectedWrap>
        </>
    )
}

export default SelectQuestion;