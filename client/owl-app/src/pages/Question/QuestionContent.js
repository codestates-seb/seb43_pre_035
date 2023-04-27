import styled from "styled-components";
import { UpdateButton, ClickButton } from '../../styles/UIStyles'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormInput from "../../components/ask/FormInput";
import { axiosAuth } from "../../utils/axiosConfig";
import { UserContext } from "../../utils/UserContextConfig";
import { useContext } from 'react';


const ContentWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    padding-left: 0;
    border-bottom: 1px solid var(--colors-qcontent-border);

`

const ContentDetail = styled.div`
    min-width: 400px;
    font-size: var(--size-text-qcontent);
    word-wrap: break-word;
    white-space: pre-wrap;
`

const UserWrap= styled.div`
    ${'' /* width: 130px; */}
    padding: 10px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    ${'' /* align-items: flex-start; */}
`

const ButtonWrap = styled.div`
    padding: 20px;
    display: flex;
    justify-content: flex-end;
`


const CreateUser = styled.div`
    ${'' /* padding: 15px; */}
    padding: 10px 0;
    font-size: 15px;
    color: #8D7B68;
`

const CreateAvatar = styled.img`
    width: var(--size-thread-avatar);
    height: var(--size-thread-avatar);
    border-radius: 50%;
`

const QuestionContent = ({question, setIsEditState}) =>{

    const { memberId } = useContext(UserContext);
    const navigate = useNavigate()
    // const paserContent = question.content
    // console.log(question.member)
    const url = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}`;

    const editClickQuestion=()=>{
        setIsEditState(false)
    }



    const deleteQHandler = () => {
        axiosAuth.delete(url)
            .then(res => {
                console.log("delete Q success!")
                navigate('/');
                navigate(0);
            })
            .catch(err => {console.log("delete Q fail! ", err)})
    }


    return (
        <>
        <ContentWrap>
            <ContentDetail>{question.content}</ContentDetail>
            <UserWrap>
                <CreateAvatar src={question.member.avatarLink}></CreateAvatar>
                <CreateUser>{question.member.displayName}</CreateUser>
            {memberId === question.member.memberId?  <ButtonWrap>
                <UpdateButton onClick={editClickQuestion}>수정</UpdateButton>
                <UpdateButton onClick={deleteQHandler}>삭제</UpdateButton>
            </ButtonWrap>: null}
            {/* {isLoggedIn  && <ButtonWrap>
                <UpdateButton onClick={EditQuestion}>수정</UpdateButton>
                <UpdateButton onClick={deleteQHandler}>삭제</UpdateButton>
            </ButtonWrap>} */}
            </UserWrap>
            </ContentWrap>
        </>
    )
}

export default QuestionContent