import styled from "styled-components";
import Title from "./Title";

const SelectedWrap = styled.div`
    padding: 10px;
    top : 500px;
    color: white;
`

const QuestionForm = styled.div`
    padding: 20px;
    width: 50rem;
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
            <QuestionForm></QuestionForm>
        </SelectedWrap>
        </>
    )
}

export default SelectQuestion;