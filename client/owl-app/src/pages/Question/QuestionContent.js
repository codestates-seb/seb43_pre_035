import styled from "styled-components";
import axios from 'axios';
import { UpdateButton, ClickButton } from '../../styles/UIStyles'
import ReactHTmlParser from 'html-react-parser'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormInput from "../../components/ask/FormInput";

const ContentWrap = styled.div`
    width: 750px;
    padding: 20px;
    border-bottom: 2px solid #DACC96;
    display: flex;
    justify-content: center;
`

const ContentDetail = styled.div`
    width: 572px;
    font-size: 14px;
`

const UserWrap= styled.div`
    width: 130px;
    padding: 10px;
    display: flex;
    align-items: end;
    flex-direction: column;
    align-items: flex-start;
`

const ButtonWrap = styled.div`
    padding: 20px;
    display: flex;
    justify-content: flex-end;
`


const CreateUser = styled.div`
    padding: 15px;
    font-size: 15px;
    color: #8D7B68;
`

const CreateAvatar = styled.img`
    width: var(--size-thread-avatar);
    height: var(--size-thread-avatar);
    border-radius: 50%;
`

const QuestionContent = ({question, isLoggedIn, setIsEditState}) =>{

    const navigate = useNavigate()
    // const paserContent = question.content
    // console.log(question.member)
    const url = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}`;
    
    const headers = { headers :
        {Authorization : `Bearer ${process.env.REACT_APP_NGROK_TOKEN}`}
    };

    const EditQuestion = () =>{
        setIsEditState(false)
    }

    

    const deleteQHandler = () => {
        axios.delete(url, headers)
            .then(res => {console.log("delete Q success!")}
            ,navigate("/")
            )
            .catch(err => {console.log("delete Q fail! ", err)})
    }


    return (
        <>
        <ContentWrap>
            <ContentDetail>{question.content}</ContentDetail>
            <UserWrap>
                <CreateAvatar src={question.member.avatarLink}></CreateAvatar>
                <CreateUser>{question.member.displayName}</CreateUser>
            {isLoggedIn  && <ButtonWrap>
                <UpdateButton onClick={EditQuestion}>수정</UpdateButton>
                <UpdateButton onClick={deleteQHandler}>삭제</UpdateButton>
            </ButtonWrap>}
            </UserWrap>
            </ContentWrap>
        </>
    )
}

export default QuestionContent