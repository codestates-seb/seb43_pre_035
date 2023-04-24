import styled from "styled-components";
import CommentCreated from "./CommentCreated";


const CommentListWrap = styled.div`
    padding: 10px;
    height: 100%;
    width: 750px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

`

const AnswerCommentList = ({answerComments, updateAnswerCommentHandler, deleteAnswerCommentHandler}) => {

    console.log(answerComments)

    return (
        <>
        <CommentListWrap>
            {answerComments && answerComments.map((comment)=>
            <CommentCreated comment={comment}
                            commentType={'aComment'}
                            updateAnswerCommentHandler={updateAnswerCommentHandler}
                            deleteAnswerCommentHandler={deleteAnswerCommentHandler}
                            key={comment.id} />)}
        </CommentListWrap>
        </>

    )
}

export default AnswerCommentList