import styled from "styled-components";
import Title from "./Title";
import QuestionContent from "./QuestionContent"
import AddComment from "./AddComment"
import Answerlist from "./AnswerList";
import AnswerCreate from "./AnswerCreate";

const SelectedWrap = styled.div`
    padding: 10px;
    top : 500px;
    color: white;
`


const AskanyTingButton = styled.button`
    border-radius: 1px;
    color: white;
`

const SelectQuestion = () => {

    return (
        <>
        <SelectedWrap>
            <AskanyTingButton></AskanyTingButton>
            <Title>Title!</Title>
            <QuestionContent></QuestionContent>
            <AddComment></AddComment>
            <Answerlist></Answerlist>
            <AddComment></AddComment>
            <AnswerCreate></AnswerCreate>
        </SelectedWrap>
        </>
    )
}

export default SelectQuestion;