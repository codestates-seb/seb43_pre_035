import styled from "styled-components"

const CreateWrap = styled.div`
    padding: 10px;
    width: 750px;
    height: 370px;
    display: flex;
    justify-content: center;
`

const CreateBlock = styled.div`
    padding: 10px;
    width: 750px;
    height: 231px;
`
const CreateHeader = styled.div`
    height: 30px;
    border-bottom: 2px solid white;

`
const CreateEditor = styled.div`
    height: 200px;
    padding: 10px;
    background-color: #777777;
`
const CreateButton = styled.button`
    width: 100px;
    height: 30px;
    margin-top: 10px;
    background-color: #777777;
    color: white;
    border-radius: 15px;
`

const ButtonBlock = styled.div`

    width: 120px;
    height: 20px;
    display: flex;
`

const LoginButton = styled.button`
    width: 50px;
    height: 15px;
    margin-top: 10px;
    border-right: 1px solid white;
    font-size: 10px;
    background-color: #322A28;
    color: white;

`

const SignupButton = styled.button`
    width: 50px;
    height: 15px;
    font-size: 10px;
    margin-top: 10px;
    background-color: #322A28;
    color: white;

`

const AnswerCreate = () =>{

    return (
        <CreateWrap>
            <CreateBlock>
                <CreateHeader>답변작성</CreateHeader>
                <CreateEditor>로그인해야 답변가능합니다.</CreateEditor>
                <CreateButton>답변하기</CreateButton>
                <ButtonBlock>
                    <LoginButton>로그인</LoginButton>
                    <SignupButton>회원가입</SignupButton>
                </ButtonBlock>
            </CreateBlock>
        </CreateWrap>

    )
}

export default AnswerCreate