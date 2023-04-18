import styled from "styled-components";
import SelectQuestion from "./SelectQuestion";

const QuestionWrap = styled.div`
    padding: 10px;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const QuestionDetail = () => {

    return (
        <>

        <QuestionWrap>Question Page!</QuestionWrap>
        <QuestionWrap>Question Page!</QuestionWrap>
        <QuestionWrap>Question Page!</QuestionWrap>
        <QuestionWrap>
            <SelectQuestion/>
        </QuestionWrap>

        </>
    )
}

export default QuestionDetail;