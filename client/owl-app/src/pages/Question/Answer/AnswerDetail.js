import styled from "styled-components";
import AddAnswerComment from "../Comment/AddAnswerComment";
import AnswerCommentList from '../Comment/AnswerCommentList'
import { ClickButton,UpdateButton } from "../../../styles/UIStyles";
import { useState } from "react";
import axios from 'axios';
import AnswerPatch from "./AnswerPatch";
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
    border-bottom: 2px solid #DACC96;
`
const Answeruserwrap = styled.div`
    display: flex;
    padding: 10px;
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
    height: 20vh;
    width: 100%;
`
const ReviseButton = styled(UpdateButton) `
    ${'' /* height: 10%; */}
    background: var(--colors-darkred);
`


const AnswerDetail = ({ question, answer, answers, updateAnswerHandler, deleteAnswerHandler, isLoggedIn, openModal }) => {


    const navigate= useNavigate();
    const [answerComments, setAnswerComments] = useState(answer.answerReplies);

    const url_acpost = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/answers/${answer.answerId}/answer_replies`;

    const url_acpatch = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/answers/${answer.answerId}/answer_replies`;

    const headers = { headers :
        {Authorization : `Bearer ${process.env.REACT_APP_NGROK_TOKEN}`}};

    console.log(answer.answerId.answerReplyId)

    const addAnswerCommentHandler = (newComment) => {
        // setAnswerComments([...answerComments, newComment]);
        // const newAnswerReplies = [...answerComments, newComment]; //set함수는 다음렌더링되서야 업데이트를 하기 때문에!

        // const newAnswers = answers.map(el => {
        //     // console.log("date: ", el.createdDate); //date를 나중에 id로 대치!
        //     if (el.id === answer.id) {
        //         if (el.answerReplies) {
        //             el.answerReplies = [...newAnswerReplies];
        //         }
        //         // console.log("result:", el.answerReplies);
        //     }
        //     return el;
        // });
        console.log(newComment)
            axios.post(url_acpost, { "content": newComment }, headers)
            .then(res => { console.log("answerReplies patch success!", res)
            navigate(0)
        })
                .catch(err => { console.log("answerReplies patch fail!", err) })
    }

    const updateAnswerCommentHandler = (comment_id, updatedComment) => {
        console.log('update answer comment being handled!');
        const newComments = answerComments.map((el) => {
            if (el.id === comment_id) el.content = updatedComment;
            return el;
        })

        setAnswerComments(newComments);
        console.log("newcomments:", newComments);

        const newAnswers = answers.map(el => {
            if (el.id === answer.id){
                el.answerReplies = el.answerReplies.map(reply => {
                    if (reply.id === comment_id) reply.content = updatedComment;
                    return reply;
                })
            }
            return el;
        })
        console.log("newanswers:", newAnswers);

        axios.patch(url_acpatch, {"answers": newAnswers})
            .then((res) => {
                console.log("update answercomment success!", res);
            })
            .catch((err) => {
                console.log("update answercomment fail!", err);
            });
    }

    const deleteAnswerCommentHandler = (comment_id) => {
        console.log("the deleting actually happens here, comment id:", comment_id);
        const filteredAnswerComments = answerComments.filter(el => el.id !== comment_id);

        setAnswerComments(filteredAnswerComments);

        const newAnswers = answers.map(el => {
            if (el.id === answer.id){
                el.answerReplies = el.answerReplies.filter(reply => reply.id !== comment_id);
            }
            return el;
        })

        axios.patch(url_acpatch, {"answers": newAnswers})
            .then(res => { console.log("delete answercomment success!", res) })
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
        setIsEditState(!isEditState);
        // updateAnswerHandler(answer.id, updatedAnswer)
        // console.log("돼라:", updatedAnswer )
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
                    <ClickButton >답변 수정하기</ClickButton> </>:
                    <Answeruserwrap>
                    <AnswerContent>{answer.content}</AnswerContent>
                    <CreateAvatar scr={answer.member.avatarLink}/>
                    <CreateUserA>{answer.member.displayName}</CreateUserA>
                    {isLoggedIn &&
                    <>
                    <ReviseButton onClick={handleEditClick}>수정</ReviseButton>
                    <ReviseButton onClick={deleteClickHandler}>삭제</ReviseButton>
                    </>}
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