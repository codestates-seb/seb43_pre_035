import styled from "styled-components";
import React,{useState} from "react"
import { fetchCreate } from '../../../utils/api'

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
    const [newCommentContent, setNewCommentContent] = useState([])

    const onTextChange = (e) => { 
        setNewCommentContent(e.target.value);
      };
    
    const onClickCommentSubmit = async (e)=>{
        // const comment = e.target.newCommentContent.value
        let newComment = {
            "id" : "0",
            "member" : {
              "displayName": "zeeeeeeee",
              "avatarLink": "https://mypreprojecttempbucket.s3.ap-northeast-2.amazonaws.com/owl08.png"
            },
            "content" : newCommentContent,
            "updateDate" : "2023-04-19"
        }
        
        console.log(newComment)
        fetchCreate(`http://localhost:3001/questions/1`, newComment)
        
    }
    
    return (
        <>
        <CommentInputWrap>
            <CommentInputCompo type="text" placeholder="Comment를 달아주세요"
            onChange={onTextChange}
            />
            <CreatButton onClick={onClickCommentSubmit}>작성하기</CreatButton>
        </CommentInputWrap>
        </>
    )
}

export default CommentInput