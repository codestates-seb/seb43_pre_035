import styled from "styled-components";
import AddAnswerComment from "../Comment/AddAnswerComment";
import AnswerCommentList from '../Comment/AnswerCommentList'
import { ClickButton,UpdateButton } from "../../../styles/UIStyles";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AnswerBlock = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    color: white;
    z-index: 100;
`

const AnsweruserBlock = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    border: 2px solid #DACC96;
    border-radius: 10px;
`
const Answeruserwrap = styled.div`
    display: flex;
    padding: 10px;
`
const AnswerUser = styled.div`
    display: flex;
    padding: 10px;
    align-items: flex-end;
`

const AnswerContent = styled.div`
    padding: 10px;
    width: 600px;
    color: white;
`


const CreateUserA = styled.div`
    padding-top: 60px;
    width: 130px;
    font-size: 15px;
    color: #8D7B68;
`

const CreateAvatar = styled.img`
    width: var(--size-thread-avatar);
    height: var(--size-thread-avatar);
    border-radius: 50%;
`

const EditorInput =styled.input`
    height: 300px;
    display: flex;
    border: none;
    resize: none;
    outline: none;
    margin-bottom: 10px;
    padding: 15px 10px;
    overflow: auto;
    border-radius: 10px;
    font-size: 1em;
    font-family: 'TheJamsil', sans-serif;
    font-weight: var(--fonts-weight-regular);
    background: var(--colors-dullbrown);
    color: var(--colors-text-default);

&::placeholder{
    color: var(--colors-text-placeholder-dark);
    font-weight: var(--fonts-weight-regular);
}

&:focus, &:active{
    border: 1px solid var(--colors-yellow);
}
`
const ReviseButton = styled(UpdateButton) `
    ${'' /* height: 10%; */}
    height: 20px;
    background: var(--colors-darkred);
`

const AnswerDetail = ({ question, answer, answers, updateAnswerHandler, deleteAnswerHandler, isLoggedIn, openModal }) => {


    const navigate= useNavigate();
    const [answerComments, setAnswerComments] = useState(answer.answerReplies);

    const url_acpost = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/answers/${answer.answerId}/answer_replies`;


    const headers = { headers :
        {Authorization : `Bearer ${process.env.REACT_APP_NGROK_TOKEN}`}};

    console.log(answer.answerId.answerReplyId)

    const addAnswerCommentHandler = (newComment) => {
        
        
            axios.post(url_acpost, { "content": newComment }, headers)
            .then(res => { console.log("answerReplies patch success!", res)
            navigate(0)
        })
                .catch(err => { console.log("answerReplies patch fail!", err) })
    }

    const updateAnswerCommentHandler = (comment_id, updatedComment) => {

        const url_acpatch = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/answers/${answer.answerId}/answer_replies/${comment_id}`;
        console.log('update answer comment being handled!');
        
        axios.patch(url_acpatch, {"content": updatedComment}, headers)
            .then((res) => {
                console.log("update answercomment success!", res);
                navigate(0)
            })
            .catch((err) => {
                console.log("update answercomment fail!", err);
            });
    }

    const deleteAnswerCommentHandler = (comment_id) => {
        const url_acpatch = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/answers/${answer.answerId}/answer_replies/${comment_id}`;

        
        axios.delete(url_acpatch ,headers )
            .then(res => { console.log("delete answercomment success!", res);navigate(0) })
            .catch(err => { console.log("delete answercomment fail!", err) })

    }

    const deleteClickHandler = (e) => {
        //삭제 전 묻기 - 진짜 삭제하고 싶으신가요?
        e.stopPropagation();
        deleteAnswerHandler(answer.id);
    }

    const [isEditState, setIsEditState] = useState(false);
    const [updatedAnswer, setUpdatedAnswer] = useState(answer.content);

    const handleEditClick = ()=>{
       
        updateAnswerHandler(answer.answerId, updatedAnswer)
       
    }

    const onTextChange = (e) => {
        setUpdatedAnswer(e.target.value);
    }

    return (
        <>
            <AnswerBlock>
                <AnsweruserBlock>
        { isEditState ? <>
                    <EditorInput type="text" value={updatedAnswer} onChange={onTextChange} />
                    <ClickButton onClick={handleEditClick} >답변 수정하기</ClickButton> </>:
                    <Answeruserwrap>
                    <AnswerContent>{answer.content}</AnswerContent>
                    <AnswerUser>
                    <CreateAvatar scr={answer.member.avatarLink}/>
                    <CreateUserA>{answer.member.displayName}</CreateUserA>
                    {isLoggedIn &&
                    <>
                    <ReviseButton onClick={()=>{setIsEditState(true)}}>수정</ReviseButton>
                    <ReviseButton onClick={deleteClickHandler}>삭제</ReviseButton>
                    </>}
                    </AnswerUser>
                    </Answeruserwrap>
                    }

                </AnsweruserBlock>

                <AnswerCommentList answerComments={answerComments}
                                    deleteAnswerCommentHandler={deleteAnswerCommentHandler}
                                    updateAnswerCommentHandler={updateAnswerCommentHandler}
                                    openModal={openModal}
                                    isLoggedIn={isLoggedIn}
                ></AnswerCommentList>
            </AnswerBlock>
            <AddAnswerComment addAnswerCommentHandler={addAnswerCommentHandler}
                              openModal={openModal}
                              isLoggedIn={isLoggedIn}
                              ></AddAnswerComment>
        </>


    )
}

export default AnswerDetail