import styled from "styled-components";
import { UpdateButton,ClickButton } from '../../styles/UIStyles'
import ReactHTmlParser from 'html-react-parser'


const ContentWrap = styled.div`
    width: 750px;
    padding: 20px;
    border-bottom: 2px solid #FFFFFF;
    display: flex;
    justify-content: center;
`

const ContentDetail = styled.div`
    width: 572px;
    font-size: 14px;
`


const CreateUser = styled.div`
    padding-top: 100px;
    width: 130px;
    height: 70px;
    font-size: 15px;
`

const ButtonWrap = styled.div`
    padding: 20px;
    display: flex;
    justify-content: flex-end;
    border-bottom: 2px solid #FFFFFF;
`

const QuestionContent = ({question, isLoggedIn}) =>{
    // const paserContent = question.content
    // console.log(question.member)
    return (
        <>
        <ContentWrap>
            {/* {ReactHTmlParser(<ContentDetail>{paserContent}</ContentDetail>) } */}
            <ContentDetail>{question.content}</ContentDetail>
            <CreateUser>{question.member.displayName}</CreateUser>
        </ContentWrap>
        {isLoggedIn && 
        <ButtonWrap>
            <UpdateButton>수정</UpdateButton>
            <UpdateButton>삭제</UpdateButton>
        </ButtonWrap> }
        
        </>
    )
}

export default QuestionContent