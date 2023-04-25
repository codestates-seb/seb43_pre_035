import styled from "styled-components";
import CommentCreated from "./CommentCreated";
import { useState } from "react";
import AddComment from "./AddComment";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CommentListWrap = styled.div`
  padding: 10px;
  width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const QuestionCommentList = ({ question, isLoggedIn, openModal }) => {
  const [comments, setComments] = useState(question.questionReplies);
  // const replies = question.questionReplies
  const navigate = useNavigate();

  const url_qpost = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/question_replies`;
  

  
  
  const headers = { headers :
    {Authorization : `Bearer ${process.env.REACT_APP_NGROK_TOKEN}`
}
};
  console.log(question.questionReplies)
  
  const addCommentHandler = (newComment) => {
    // console.log("comments: ", newComment);
    // setComments([...comments, newComment]);
    
    //axios.patch to add comments...-----> with real server, revise to use post to add comments
    axios
        .post(url_qpost, {"content" : newComment}, headers)
        //   questionReplies: [...question.questionReplies, newComment],
        .then((res) => {
          console.log("add QComment success! id: ", res.questionReplyId);
          navigate(0)
        })
        .catch((err) => {
          console.log("add QComment fail!", err);
        });
      }

  const updateQuestionCommentHandler = (comment_id, updatedComment) => {
    console.log("comment update is being handled");
    //use map to change the comment_id content
  const url_qpatch = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/question_replies/${comment_id}`;
   
    console.log(updatedComment)
    axios
      .patch(url_qpatch, { "content" : updatedComment },headers)
      .then((res) => {
        console.log("update Qcomment success!", res.questionReplyId);
        navigate(0);
      })
      .catch((err) => {
        console.log("update Qcomment fail!", err);
      });



  };


  const deleteQuestionCommentHandler = (comment_id) => {
    //can only use patch ...
    console.log("delete question comment!");
    const newComments = comments.filter((el) => el.id !== comment_id);
    setComments(newComments);
    const url_qpatch = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${question.questionId}/question_replies/${comment_id}`;

    axios
      .patch(url_qpatch, { ...question, questionReplies: newComments })
      .then((res) => {
        console.log("delete Qcomment success!", res);
      })
      .catch((err) => {
        console.log("delete Qcomment fail!", err);
      });
  };

  return (
    <>
      {!!comments.length && (
        <CommentListWrap>
          {comments.map((comment) => (
            <CommentCreated
              comment={comment}
              key={comment.id}
              commentType='qComment'
              deleteAnswerCommentHandler={deleteQuestionCommentHandler}
              updateQuestionCommentHandler={updateQuestionCommentHandler}
              openModal={openModal}
              isLoggedIn={isLoggedIn}
            ></CommentCreated>
          ))}
        </CommentListWrap>
      )}
      <AddComment
        openModal={openModal}
        isLoggedIn={isLoggedIn}
        addCommentHandler={addCommentHandler}
      ></AddComment>
    </>
  );
};

export default QuestionCommentList;
