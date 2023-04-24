import styled from "styled-components";
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

const QuestionContent = ({question, openModal}) =>{
    // const paserContent = question.content
    // console.log(question.member)
    return (
        <>
        <ContentWrap>
            {/* {ReactHTmlParser(<ContentDetail>{paserContent}</ContentDetail>) } */}
        <ContentDetail>{question.content}</ContentDetail>
        <CreateUser>{question.member.displayName}</CreateUser>
        </ContentWrap>
        </>
    )
}

export default QuestionContent