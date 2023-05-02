import CommentCreated from "./CommentCreated";
import { ListWrap } from "./CommentStyle";

const AnswerCommentList = ({answerComments, updateAnswerCommentHandler, deleteAnswerCommentHandler, openModal}) => {



    return (
        <ListWrap>
            {answerComments && answerComments.map((comment)=>
            <CommentCreated comment={comment}
                            openModal={openModal}
                            commentType={'aComment'}
                            updateAnswerCommentHandler={updateAnswerCommentHandler}
                            deleteAnswerCommentHandler={deleteAnswerCommentHandler}
                            key={comment.answerReplyId} />)}
        </ListWrap>
    )
}

export default AnswerCommentList