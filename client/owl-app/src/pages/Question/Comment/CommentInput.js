import styled from "styled-components";
import React,{useState} from "react"

const CommentInputWrap = styled.div`
    padding: 10px;
    width: 750px;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CommentInputCompo = styled.input`
    padding: 10px;
    width: 700px;
    height: 40px;
    border: 1px solid #E7CC8F;
    background-color: #493E3B;
    .placeholder{
        color : white;
    }
`

const CreatButton = styled.button`
    padding: 10px;
    width: 100px;
    height: 30px;
    color: white;
    border: 1px solid white;
    background-color: #BF8B67;
`

const CommentInput = ({addCommentHandler, AnswerCommentHandler})=>{
    const [newCommentContent, setNewCommentContent] = useState('');
    const [invalidComment, setInvalidComment] = useState(false);

    const onTextChange = (e) => {
        setNewCommentContent(e.target.value);
      };

    const onClickCommentSubmit = ()=>{
        // console.log("comment content: ", newCommentContent);
        if (!newCommentContent) {console.log("no content!"); setInvalidComment(true); return;};
        let newComment = {
            "id" : "1",
            "member" : {
              "displayName": "zeeeeeeee",
              "avatarLink": "https://mypreprojecttempbucket.s3.ap-northeast-2.amazonaws.com/owl08.png"
            },
            "content" : newCommentContent,
            "updateDate" : "2023-04-19"
        }

        addCommentHandler(newComment)
        console.log(newComment)
        setInvalidComment(false);
        setNewCommentContent('');
    }

    return (
        <>
        <CommentInputWrap>
            {invalidComment ? <div>내용이 없습니다</div>: null}
            <CommentInputCompo type="text" placeholder="Comment를 달아주세요"
            onChange={onTextChange}
            value={newCommentContent}
            />
            <CreatButton onClick={onClickCommentSubmit}>작성하기</CreatButton>
        </CommentInputWrap>
        </>
    )
}

export default CommentInput