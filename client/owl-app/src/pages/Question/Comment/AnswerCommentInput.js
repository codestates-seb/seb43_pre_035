import styled from "styled-components";
import React,{useState} from "react"
import { CreateButtonLogin} from '../Answer/AnswerStyle'

const CommentInputWrap = styled.div`
    padding: 10px;
    width: 750px;
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

const AnswerCommentInput = ({addAnswerCommentHandler})=>{

    const [answerCommentContent, setAnswerCommentContent] =useState('');
    const [invalidComment, setInvalidComment] = useState(false);


    const onTextChange = (e) => {
        setAnswerCommentContent(e.target.value);
      };

    const onClickCommentSubmit = (e) => {
        e.stopPropagation();
        
        // console.log("answer content: ", answerCommentContent);
        if (!answerCommentContent) {console.log("no content!"); setInvalidComment(true); return;}
       


        addAnswerCommentHandler(answerCommentContent);
        setAnswerCommentContent('');
        setInvalidComment(false);
    }

    return (
        <>
        <CommentInputWrap>
            {invalidComment ? <div>내용을 적어주셔야 합니다.</div> : null}
            <CommentInputCompo 
                                placeholder="Comment를 달아주세요"
                                value={answerCommentContent}
                                onChange={onTextChange}
            />
            <CreateButtonLogin onClick={onClickCommentSubmit}>작성하기</CreateButtonLogin>
        </CommentInputWrap>
        </>
    )
}

export default AnswerCommentInput;