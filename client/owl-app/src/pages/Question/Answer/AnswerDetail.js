import styled from "styled-components";
import AddAnswerComment from "../Comment/AddAnswerComment";
import AnswerCommentList from '../Comment/AnswerCommentList'
import { ClickButton, UpdateButton } from "../../../styles/UIStyles";
import { CancelButton } from './AnswerStyle'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosAuth } from "../../../utils/axiosConfig";
import { UserContext } from "../../../utils/UserContextConfig";
import { useContext } from 'react';
import { formatDate }   from '../../../styles/formatDate'

const AnswerBlock = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    color: white;
    z-index: 100;
    width: 100%;
`

const AnsweruserBlock = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    border: 1px solid #DACC96;
    border-radius: 10px;
    width: 100%;
`
const Answeruserwrap = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: row;
    justify-content: center;
`
const AnswerUser = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: flex-end;
    ${'' /* flex-direction: flex-end; */}
`

const AnswerContent = styled.div`
    padding: 10px 0;
    width: 100%;
    color: white;
    word-wrap: break-word;
    white-space: pre-wrap;
`

const UserBlock = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const CreateUserA = styled.div`
    ${'' /* padding-top: 60px; */}
    font-size: 15px;
    color: #8D7B68;
    padding: 10px 0;
`

const CreateAvatar = styled.img`
    width: var(--size-thread-avatar);
    height: var(--size-thread-avatar);
    border-radius: 50%;
`

const ButtonBlock = styled.div`
    display: flex;
    flex-direction: row;
    ${'' /* align-items: flex-end; */}
`

const CreateDate = styled.div`
    padding-left: 5px;
    padding-right: 20px;
    ${'' /* height: 20px; */}
    font-size: var(--size-text-comment-info);
    display: flex;
    justify-content: space-around;
    color: #DACC96;
    word-break: keep-all;
    width: 150px;
`
const EditorInput = styled.textarea`
    ${'' /* height: 300px; */}
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
// const ReviseButton = styled(UpdateButton)`
//     ${'' /* height: 10%; */}
//     height: 20px;
//     background: var(--colors-darkred);
// `

const AnswerDetail = ({ question, answer, updateAnswerHandler, deleteAnswerHandler, openModal }) => {
    const { memberId } = useContext(UserContext);
    // console.log(answer.member.memberId)

    const navigate = useNavigate();
    const [answerComments, setAnswerComments] = useState(answer.answerReplies);

    const url_acpost = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/answers/${answer.answerId}/answer_replies`;


    const addAnswerCommentHandler = (newComment) => {


        axiosAuth.post(url_acpost, { "content": newComment })
            .then(res => {
                console.log("answerReplies patch success!", res)
                setAnswerComments([...answerComments, res.data]);
                // navigate(0)
            })
            .catch(err => { console.log("answerReplies patch fail!", err) })
    }

    const updateAnswerCommentHandler = (comment_id, updatedComment) => {

        const url_acpatch = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/answers/${answer.answerId}/answer_replies/${comment_id}`;

        // console.log('update answer comment being handled!');

        axiosAuth.patch(url_acpatch, { "content": updatedComment })
            .then((res) => {
                console.log("update answercomment success!", res);
                // navigate(0)
            })
            .catch((err) => {
                console.log("update answercomment fail!", err);
            });
    }

    const deleteAnswerCommentHandler = (comment_id) => {
        const url_acpatch = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/answers/${answer.answerId}/answer_replies/${comment_id}`;


        axiosAuth.delete(url_acpatch)
            .then(res => {
                console.log("delete answercomment success!", res);
                setAnswerComments([...answerComments.filter(el => el.answerReplyId !== comment_id)]);
                // navigate(0);
            })
            .catch(err => { console.log("delete answercomment fail!", err) })

    }

    const deleteClickHandler = (e) => {
        //삭제 전 묻기 - 진짜 삭제하고 싶으신가요?
        e.stopPropagation();
        deleteAnswerHandler(answer.answerId);
    }

    const [isEditState, setIsEditState] = useState(false);
    const [updatedAnswer, setUpdatedAnswer] = useState(answer.content);

    const handleEditClick = () => {

        updateAnswerHandler(answer.answerId, updatedAnswer);
        setIsEditState(false);

    }

    const onTextChange = (e) => {
        setUpdatedAnswer(e.target.value);
    }

    

    return (
            <AnswerBlock>
                <AnsweruserBlock>
                    {isEditState ? <>
                        <EditorInput type="text" value={updatedAnswer} onChange={onTextChange} />
                        <ClickButton onClick={handleEditClick} >답변 수정하기</ClickButton>
                        <CancelButton onClick={() => { setIsEditState(false) }}>취소하기</CancelButton>
                    </> :
                        <Answeruserwrap>
                            <AnswerContent>{answer.content}</AnswerContent>
                            <AnswerUser>
                                <UserBlock>
                                    <CreateAvatar src={answer.member.avatarLink} />
                                    <CreateUserA>{answer.member.displayName}</CreateUserA>
                                    <CreateDate>{formatDate(answer.createdDate)}</CreateDate>
                                </UserBlock>
                                {memberId === answer.member.memberId &&
                                    <ButtonBlock>
                                        <UpdateButton onClick={() => { setIsEditState(true) }}>수정</UpdateButton>
                                        <UpdateButton onClick={deleteClickHandler}>삭제</UpdateButton>
                                    </ButtonBlock>}
                            </AnswerUser>

                        </Answeruserwrap>
                    }

                </AnsweruserBlock>

                <AnswerCommentList key={answer.answerId}
                    answerComments={answerComments}
                    deleteAnswerCommentHandler={deleteAnswerCommentHandler}
                    updateAnswerCommentHandler={updateAnswerCommentHandler}
                    openModal={openModal}
                ></AnswerCommentList>
                <AddAnswerComment addAnswerCommentHandler={addAnswerCommentHandler}
                    openModal={openModal}
                ></AddAnswerComment>
            </AnswerBlock>


    )
}

export default AnswerDetail