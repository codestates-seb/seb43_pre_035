import CommentCreated from "./CommentCreated";
import { useState } from "react";
import AddComment from "./AddComment";
import { useNavigate } from "react-router-dom";
import { axiosAuth } from "../../../utils/axiosConfig";
import { ListWrap } from './CommentStyle';

const QuestionCommentList = ({ question, openModal }) => {

  const [comments, setComments] = useState(question.questionReplies);

  const navigate = useNavigate();

  const url_qpost = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/question_replies`;




  const addCommentHandler = (newComment) => {

    //axios.patch to add comments...-----> with real server, revise to use post to add comments
    axiosAuth
        .post(url_qpost, {"content" : newComment})
        .then((res) => {
          console.log("add QComment success! id: ", res.questionReplyId);
          setComments([...comments, res.data]);
          // navigate(0)
        })
        .catch((err) => {
          console.log("add QComment fail!", err);
        });
      }


  const updateQuestionCommentHandler = (comment_id, updatedComment) => {
    // console.log("comment update is being handled");
    const url_qpatch = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/question_replies/${comment_id}`;

    axiosAuth
      .patch(url_qpatch, { "content" : updatedComment })
      .then((res) => {
        console.log("update Qcomment success!", res.questionReplyId);
        // setComments([...comments, res.data]);
        // navigate(0);

      })
      .catch((err) => {
        console.log("update Qcomment fail!", err);
      });

  };


  const deleteQuestionCommentHandler = (comment_id) => {

    const url_qpatch = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/question_replies/${comment_id}`;

    axiosAuth
      .delete(url_qpatch)
      .then((res) => {
        console.log("delete Qcomment success!", res);
        setComments([...comments.filter(el => el.questionReplyId !== comment_id)]);
        // navigate(0);
      })
      .catch((err) => {
        console.log("delete Qcomment fail!", err);
      });
  };

  return (
    <>
      {!!comments.length && (
        <ListWrap>
          {comments.map((comment) => (
            <CommentCreated
              comment={comment}
              key={comment.questionReplyId}
              commentType='qComment'
              deleteQuestionCommentHandler={deleteQuestionCommentHandler}
              updateQuestionCommentHandler={updateQuestionCommentHandler}
              openModal={openModal}
            ></CommentCreated>
          ))}
        </ListWrap>
      )}
      <AddComment
        openModal={openModal}
        addCommentHandler={addCommentHandler}
      ></AddComment>
    </>
  );
 };

export default QuestionCommentList;
