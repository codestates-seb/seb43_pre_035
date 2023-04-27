import styled from "styled-components"
import {CreateWrap,CreateBlock, CreateHeader,CreateButtonLogin, CancleButton} from './AnswerStyle'
import { useState, useEffect } from "react"
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

const EditorInput =styled.textarea`
    height: 300px;
    width: 100%;
    white-space: pre-wrap;
`



const AnswerPatch = ({updatedAnswer, setUpdatedAnswer, setInvalidEdit}) => {
    
    const [newUpdateAnswer,setNewUpdateAnswer] = useState(updatedAnswer);
    const [invalidAnswer, setInvalidAnswer] = useState(false);


    const onEditTextChange = (e) => {
        setUpdatedAnswer(e.target.value);
      };

    const onClickSubmit = (e)=> {
      e.stopPropagation(); 
      if(!newUpdateAnswer) {console.log("no content!"); setInvalidAnswer(true); return;}
      
      
      setUpdatedAnswer(newUpdateAnswer);
      setInvalidEdit(false);
      setInvalidAnswer(true);


    }



    return (
        <>
        <CreateWrap>
            <CreateBlock>
                <CreateHeader>답변작성</CreateHeader>
                {invalidAnswer ? <span>내용을 입력해주세요.</span> : null}
                <EditorBlock>
                    <EditorInput type="text" onChange={onEditTextChange} 
                    value={updatedAnswer}/>
                </EditorBlock>
                <CreateButtonLogin onClick={onClickSubmit}>작성하기</CreateButtonLogin>
            </CreateBlock>
        </CreateWrap>
        </>

    )
}

export default AnswerPatch