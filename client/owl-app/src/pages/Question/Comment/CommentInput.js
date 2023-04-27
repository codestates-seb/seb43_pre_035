import styled from "styled-components";
import {useState} from "react"
import { CreateButtonLogin} from '../Answer/AnswerStyle'

const CommentInputWrap = styled.div`
    padding: 10px;
    padding-left: 20px;
    ${'' /* width: 750px; */}
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CommentInputCompo = styled.textarea`
    padding: 10px;
    width: 700px;
    height: 40px;
    border: 1px solid #E7CC8F;
    background-color: #493E3B;
    word-wrap: break-word;
    white-space: pre-wrap;
    .placeholder{
        color : white;
    }
    ::-webkit-scrollbar {
     display: none;
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

const CommentInput = ({addCommentHandler})=>{
    const [newCommentContent, setNewCommentContent] = useState('');
    const [invalidComment, setInvalidComment] = useState(false);

    const onTextChange = (e) => {
        setNewCommentContent(e.target.value);
      };

    const onClickCommentSubmit = (e)=>{
        e.stopPropagation();

        // console.log("comment content: ", newCommentContent);
        if (!newCommentContent) {console.log("no content!"); setInvalidComment(true); return;};

        addCommentHandler(newCommentContent);
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
            <CreateButtonLogin onClick={onClickCommentSubmit}>작성하기</CreateButtonLogin>
        </CommentInputWrap>
        </>
    )
}

export default CommentInput