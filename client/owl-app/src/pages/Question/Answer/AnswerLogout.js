import styled from "styled-components";
import {CreateWrap,CreateBlock, CreateHeader,CreateEditorLogout,CreateButtonLogout, ButtonBlock,LoginButton,SignupButton} from './AnswerStyle'

const AnswerLogout = ({logClick}) => {

    return (

        <>
            <CreateBlock>
                <CreateHeader>답변작성</CreateHeader>
                <CreateEditorLogout onClick={logClick}>로그인해야 답변가능합니다.</CreateEditorLogout>
                <CreateButtonLogout onClick={logClick}>답변하기</CreateButtonLogout>
                <ButtonBlock>
                    <LoginButton>로그인</LoginButton>
                    <SignupButton>회원가입</SignupButton>
                </ButtonBlock>
            </CreateBlock>
        </>
    )
}

export default AnswerLogout