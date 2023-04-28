import styled from "styled-components";
import { UpdateButton, ClickButton } from '../../styles/UIStyles'
import { useNavigate } from "react-router-dom";
import { axiosAuth } from "../../utils/axiosConfig";
import { UserContext } from "../../utils/UserContextConfig";
import { useContext } from 'react';


const ContentWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    padding-left: 10px;
    border-bottom: 1px solid var(--colors-qcontent-border);

`

const ContentDetail = styled.div`
    min-width: 400px;
    font-size: var(--size-text-qcontent);
    word-wrap: break-word;
    white-space: pre-wrap;
    margin-right: 20px;
`

const UserWrap = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    ${'' /* align-items: flex-start; */}
`

const ButtonWrap = styled.div`
    padding: 10px;
    padding-right: 0;
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

const QuestionContent = ({ question, setIsEditState }) => {

    const { memberId } = useContext(UserContext);
    const navigate = useNavigate()
    // const paserContent = question.content
    // console.log(question.member)
    const url = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}`;

    const editClickQuestion = () => {
        setIsEditState(false)
    }



    const deleteQHandler = () => {
        axiosAuth.delete(url)
            .then(res => {
                console.log("delete Q success!")
                navigate('/');
                navigate(0);
            })
            .catch(err => { console.log("delete Q fail! ", err) })
    }


    return (
        <>
            <ContentWrap>
                <ContentDetail>{question.content}</ContentDetail>
                <UserWrap>
                    <CreateAvatar src={question.member.avatarLink}></CreateAvatar>
                    <CreateUser>{question.member.displayName}</CreateUser>
                    {memberId === question.member.memberId ? <ButtonWrap>
                        <UpdateButton onClick={editClickQuestion}>수정</UpdateButton>
                        <UpdateButton onClick={deleteQHandler}>삭제</UpdateButton>
                    </ButtonWrap> : null}
                </UserWrap>
            </ContentWrap>
        </>
    )
}

export default QuestionContent