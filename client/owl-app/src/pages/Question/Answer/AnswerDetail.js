import styled from "styled-components";

const AnswerContent = styled.div`
    padding: 10px;
    width: 600px;
    color: white;
`
const CreateUserA = styled.div`
    padding-top: 150px;
    width: 130px;
    height: 100px;
    font-size: 15px;
`


const AnswerDetail = ({answers})=>{


    
    return (
        <>
            <AnswerContent>{answers.content}</AnswerContent>
            <CreateUserA>{answers.member}</CreateUserA>
        </>

        )
}

export default AnswerDetail