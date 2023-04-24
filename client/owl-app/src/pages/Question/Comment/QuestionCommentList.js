import styled from "styled-components";
import CommentCreated from "./CommentCreated";
import { useState } from "react";
import AddComment from "./AddComment";
import axios from "axios";
import { useEffect } from "react";

const CommentListWrap = styled.div`
  padding: 10px;
  width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid white;
`;

const QuestionCommentList = ({ question, isLoggedIn, openModal }) => {
  const [comments, setComments] = useState(
    question.questionReplies ? question.questionReplies : []
  );

  const url_patch = `http://localhost:3001/questions/${question.id}`;
  console.log(comments);

  const addCommentHandler = (newComment) => {
    // console.log("comments: ", comments);
    setComments([...comments, newComment]);

    //axios.patch to add comments...-----> with real server, revise to use post to add comments
    if (question.questionReplies && comments.length) {
      axios
        .patch(url_patch, {
          ...question,
          questionReplies: [...comments, newComment]
        //   questionReplies: [...question.questionReplies, newComment],
        })
        .then((res) => {
          console.log("add QComment success! id: ", newComment.id, " ", res);
        })
        .catch((err) => {
          console.log("add QComment fail!", err);
        });
    } else {
      axios
        .patch(url_patch, { ...question, questionReplies: [newComment] })
        .then((res) => {
          console.log("add first QComment success! id: ", newComment.id, " ", res);
        })
        .catch((err) => {
          console.log("add QComment fail!", err);
        });
    }
  };

  const updateQuestionCommentHandler = (comment_id, updatedComment) => {
    console.log("comment update is being handled");
    //use map to change the comment_id content
    const newComments = comments.map((el) => {
      if (el.id === comment_id) el.content = updatedComment;
      return el;
    });

    setComments(newComments);

    axios
      .patch(url_patch, { ...question, questionReplies: newComments })
      .then((res) => {
        console.log("update Qcomment success!", res);
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

    axios
      .patch(url_patch, { ...question, questionReplies: newComments })
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
