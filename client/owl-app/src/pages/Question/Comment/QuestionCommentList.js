import styled from "styled-components";
import CommentCreated from "./CommentCreated";
import { useState } from "react";
import AddComment from "./AddComment"
import axios from 'axios';


const CommentListWrap = styled.div`
    padding: 10px;
    width: 750px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid white;
`

const QuestionCommentList = ({ question }) => {

    const [comments, setComment] = useState(question.questionReplies ? question.questionReplies : []);
    const qCommentNum = question.questionReplies? question.questionReplies.length : 0;
    const url_patch = `http://localhost:3001/questions/${question.id}`;
    // console.log(comments)

    const addCommentHandler = (newComment) => {
        // console.log("comments: ", comments);
        setComment([...comments, newComment])

        //axios.patch to add comments...-----> with real server, revise to use post to add comments
        if(question.questionReplies && comments.length){
            axios.patch(url_patch, {...question, "questionReplies": [...question.questionReplies, newComment]})
                .then((res) => {console.log("there arepatch success!", res)})
                .catch(err => {console.log("patch fail!", err)})

        }else{
            axios.patch(url_patch, {...question, "questionReplies": [newComment]})
            .then((res) => {console.log("patch success!", res)})
            .catch(err => {console.log("patch fail!", err)})
        }

    }

    const updateHandler = () => {
        //change into updatable form
    }

    const deleteQuestionCommentHandler = (comment_id) => {
        //can only use patch ...
        console.log("delete question comment!");
        const newComments = comments.filter(el => el.id !== comment_id);
        setComment(newComments);

        axios.patch(url_patch, {...question, "questionReplies" : newComments})
            .then((res) => {console.log("delete Qcomment success!", res)})
            .catch(err => {console.log("delete Qcomment fail!", err)})


    }

    return (
        <>
            {!!comments.length && <CommentListWrap>
                {comments.map((comment, idx) => <CommentCreated comment={comment} key={idx} deleteAnswerCommentHandler={deleteQuestionCommentHandler}/>)}
            </CommentListWrap>}
            <AddComment addCommentHandler={addCommentHandler} qCommentNum={qCommentNum} ></AddComment>
        </>

    )
}

export default QuestionCommentList