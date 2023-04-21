import styled from "styled-components";
import Title from "./Title";
import QuestionContent from "./QuestionContent"
import AddComment from "./Comment/AddComment"
import Answerlist from "./Answer/AnswerList"
import CommentList from "./Comment/CommentList";
import AnswerCommentList from './Comment/AnswerCommentList'

const SelectedWrap = styled.div`
    padding: 10px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;
`




const SelectQuestion = ({question,setQuestion}) => {

    return (
        <>
        <SelectedWrap>
            <Title question={question}></Title>
            <QuestionContent question={question}></QuestionContent>
                <CommentList  question={question}></CommentList>
                <Answerlist question={question} setQuestion={setQuestion}>
                <AnswerCommentList  question={question}></AnswerCommentList>
                </Answerlist>
                {/* <AddComment></AddComment> */}
                {/* <AnswerCreate></AnswerCreate> */}
        </SelectedWrap>
        </>
    )
}

export default SelectQuestion;