import styled from "styled-components";
import ReactHTmlParser from 'html-react-parser';
import { UpdateButton } from "../../styles/UIStyles";
import axios from 'axios';

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
        <UpdateButton onClick={updateQHandler}>수정</UpdateButton>
        <UpdateButton onClick={deleteQHandler}>삭제</UpdateButton>
        </ContentWrap>
        </>
    )
}

export default QuestionContent