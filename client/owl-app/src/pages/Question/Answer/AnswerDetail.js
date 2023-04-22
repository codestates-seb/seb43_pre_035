import styled from "styled-components";
import AddCommentInput from '../Comment/AddCommentInput'
import AnswerCommentList from '../Comment/AnswerCommentList'
import { useState } from "react";
import axios from 'axios';


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
    border-bottom: 1px solid white;
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
`


const AnswerDetail = ({q_id, answer, answers})=>{

    // const answerComment = answer.answerReplies;
    // console.log("answerReplies: ", answer.answerReplies);

    const [addanswerComment,setAddAnswerComment] = useState((answer.answerReplies ? answer.answerReplies : []));
    const url_patch = `http://localhost:3001/questions/${q_id}`;
    console.log(answer.member.displayName)

    const answerCommentHandler = (newComment) => {

        setAddAnswerComment([...addanswerComment, newComment]);
        // console.log("addanswercomment content: ", addanswerComment);
        console.log("addanswercomment content2: ", [...addanswerComment, newComment]);


        const newAnswerReplies = [...addanswerComment, newComment];
        console.log("newAnswerReplies", newAnswerReplies);
        console.log("answers: ", answers);

        const newAnswers = answers.map(el => {
            console.log("date: ", el.createdDate); //date 나중에 대치!
            if (el.createdDate === answer.createdDate){
                console.log("is this anything at all?");
                console.log(el);
                if (el.answerReplies) {
                    el.answerReplies = [...el.answerReplies, ...newAnswerReplies];
                }else{
                    el.answerReplies = [...newAnswerReplies];
                }
                console.log("result:", el.answerReplies);
                // console.log("what is this error? ", el.answerReplies);
                // el.answerReplies = [...el.answerReplies, addanswerComment];
            }
            return el;
        });



        if (answer.answerReplies){
            // const newAnswers = answers.map(el => {
            //     if (el.createdDate === answer.createdDate){
            //         console.log(el);
            //         console.log("what is this error? ", el.answerReplies);
            //         el.answerReplies = [...el.answerReplies, addanswerComment];
            //     }
            // });
            console.log('the answer going in is null?', newAnswers);

            axios.patch(url_patch, {"answers" : newAnswers})
                .then(res => {console.log("answerReplies patch success!", res)})
                .catch(err => {console.log("answerReplies patch fail!", err)})
        }else{
            console.log("there are no answerReplies ready!");
        }

        }


    return (
        <>
        <AnswerBlock>
            <AnsweruserBlock>
                <AnswerContent>{answer.content}</AnswerContent>
                <CreateUserA>{answer.member.displayName}</CreateUserA>
            </AnsweruserBlock>
            <AnswerCommentList addanswerComment={addanswerComment}></AnswerCommentList>
        </AnswerBlock>
        <AddCommentInput answerCommentHandler={answerCommentHandler} ></AddCommentInput>
        </>


        )
}

export default AnswerDetail