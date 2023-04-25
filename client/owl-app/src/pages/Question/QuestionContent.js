import styled from "styled-components";
import axios from 'axios';
import { UpdateButton, ClickButton } from '../../styles/UIStyles'
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
    const url = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}`;
    const headers = { headers :
        {Authorization : `Bearer ${process.env.REACT_APP_NGROK_TOKEN}`}
    };

    const updateQHandler = () => {
        axios.patch(url, {'title': '수정제목', 'content': '수정콘텐츠'}, headers)
            .then(res => {console.log("res: ", res.data)})
            .catch(err => {console.log(err.message)})
    }

    const deleteQHandler = () => {
        axios.delete(url, headers)
            .then(res => {console.log("delete Q success!")})
            .catch(err => {console.log("delete Q fail! ", err)})
    }


    return (
        <>
        <ContentWrap>
            {/* {ReactHTmlParser(<ContentDetail>{paserContent}</ContentDetail>) } */}
            <ContentDetail>{question.content}</ContentDetail>
            <CreateUser>{question.member.displayName}</CreateUser>
            </ContentWrap>
            {isLoggedIn  && <ButtonWrap>
                <UpdateButton onClick={updateQHandler}>수정</UpdateButton>
                <UpdateButton onClick={deleteQHandler}>삭제</UpdateButton>
            </ButtonWrap>}
        </>
    )
}

export default QuestionContent