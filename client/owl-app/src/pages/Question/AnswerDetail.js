import styled from "styled-components";

const AnswerContent = styled.div`
    padding: 10px;
    width: 600px;
`
const CreateUser = styled.div`
    padding-top: 150px;
    width: 130px;
    height: 100px;
    font-size: 15px;
`


const AnswerDetail = ()=>{


    
    return (
        <>
        <AnswerContent>답변입니다.</AnswerContent>
        <CreateUser>user</CreateUser>
        </>

        )
}

export default AnswerDetail