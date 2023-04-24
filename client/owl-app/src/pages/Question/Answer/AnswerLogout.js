import styled from "styled-components";
import { Link } from 'react-router-dom';
import {CreateWrap,CreateBlock, CreateHeader,CreateEditorLogout,CreateButtonLogout, ButtonBlock,LoginButton,SignupButton} from './AnswerStyle'

const AnswerLogout = ({openModal}) => {

    return (
        <>
            <CreateBlock>
                <CreateHeader>답변작성</CreateHeader>
                <CreateEditorLogout onClick={openModal}>로그인해야 답변가능합니다.</CreateEditorLogout>
                <CreateButtonLogout onClick={openModal}>답변하기</CreateButtonLogout>
                <ButtonBlock>
                    <Link to='/login'>
                        <LoginButton>로그인</LoginButton>
                    </Link>
                    <Link to='/signup'>
                    <SignupButton>회원가입</SignupButton>
                    </Link>
                </ButtonBlock>
            </CreateBlock>
        </>
    )
}

export default AnswerLogout