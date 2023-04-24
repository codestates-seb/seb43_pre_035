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

const AnswerCommentInput = ({addAnswerCommentHandler})=>{

    const [answerCommentContent, setAnswerCommentContent] =useState('');
    const [invalidComment, setInvalidComment] = useState(false);
    const[cId, setcId] = useState(Math.floor(Math.random()*1000));

    const onTextChange = (e) => {
        setAnswerCommentContent(e.target.value);
      };

    const onClickCommentSubmit = (e) => {
        e.stopPropagation();
        console.log("answer content: ", answerCommentContent);
        if (!answerCommentContent) {console.log("no content!"); setInvalidComment(true); return;}
        let newComment = {
            "id" : cId,
            "member" : {
              "displayName": "zeeeeeeee",
              "avatarLink": "https://mypreprojecttempbucket.s3.ap-northeast-2.amazonaws.com/owl08.png"
            },
            "content" : answerCommentContent,
            "updateDate" : "2023-04-19"
        }

        addAnswerCommentHandler(newComment);
        setAnswerCommentContent('');
        setInvalidComment(false);
        setcId(Math.floor(Math.random()*1000));
    }

    return (
        <>
        <CommentInputWrap>
            {invalidComment ? <div>내용을 적어주셔야 합니다.</div> : null}
            <CommentInputCompo type="text"
                                placeholder="Comment를 달아주세요"
                                value={answerCommentContent}
            onChange={onTextChange}
            />
            <CreatButton onClick={onClickCommentSubmit}>작성하기</CreatButton>
        </CommentInputWrap>
        </>
    )
}

export default AnswerCommentInput;