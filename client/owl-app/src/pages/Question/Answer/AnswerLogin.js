import styled from "styled-components"
import {CreateWrap,CreateBlock, CreateHeader,CreateEditorLogIn,CreateButtonLogin, ButtonBlock,LoginButton,SignupButton} from './AnswerStyle'

const AnswerLogin = ({logClick}) => {

    return (
        <>
        <CreateWrap>
            <CreateBlock>
                <CreateHeader>답변작성</CreateHeader>
                <CreateEditorLogIn>답변을 작성해 주세요</CreateEditorLogIn>
                <CreateButtonLogin onClick={logClick}>작성하기</CreateButtonLogin>
            </CreateBlock>
        </CreateWrap>
        </>

    )
}

export default AnswerLogin