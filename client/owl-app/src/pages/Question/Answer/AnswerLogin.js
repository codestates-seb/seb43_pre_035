import styled from "styled-components"
import {CreateWrap,CreateBlock, CreateHeader,CreateButtonLogin} from './AnswerStyle'
import React,{useState} from "react"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



const EditorBlock =styled.div`
    height: 500px;
    .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
  min-height: 400px;
  margin-bottom: 30px;
  color : black
}
`

const EditorInput =styled.input`
    height: 400px;
    width: 100%;
`



const AnswerLogin = ({addAnswerHandler}) => {
    const [newAnswerContent, setNewAnswerContent] = useState([])
    
    const onAnswerTextChange = (e) => {
        setNewAnswerContent(e.target.value);
      };

    const onClickSubmit = ()=> {

        let newAnswer = {
            "id" : "1",
            "member" : "zeereo",
            "content" : newAnswerContent,
            "answerReply" : [
                {
                    "id" : "1",
                    "content" : "그거 아닌데요?",
                    "updateDate" : "2023-04-19"
                }]
        };

        addAnswerHandler(newAnswer)
        
    }
    
   
   

    return (
        <>
        <CreateWrap>
            <CreateBlock>
                <CreateHeader>답변작성</CreateHeader>
                <EditorBlock>
                    <EditorInput type="text" onChange={onAnswerTextChange}/>
                </EditorBlock>
                <CreateButtonLogin onClick={onClickSubmit}>작성하기</CreateButtonLogin>
            </CreateBlock>
        </CreateWrap>
        </>

    )
}

export default AnswerLogin