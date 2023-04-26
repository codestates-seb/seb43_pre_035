import styled from "styled-components"
import {CreateWrap,CreateBlock, CreateHeader,CreateButtonLogin} from './AnswerStyle'
import { useState } from "react"
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
width: 100%;
height: 400px;
display: flex;
border: none;
resize: none;
outline: none;
margin-bottom: 10px;
padding: 15px 10px;
overflow: auto;
border-radius: 10px;
font-size: 1em;
font-family: 'TheJamsil', sans-serif;
font-weight: var(--fonts-weight-regular);
background: var(--colors-dullbrown);
color: var(--colors-text-default);

&::placeholder{
    color: var(--colors-text-placeholder-dark);
    font-weight: var(--fonts-weight-regular);
}

&:focus, &:active{
    border: 1px solid var(--colors-yellow);
}
`



const AnswerLogin = ({addAnswerHandler}) => {
    const [newAnswerContent, setNewAnswerContent] = useState('');
    const [invalidAnswer, setInvalidAnswer] = useState(false);

    const onAnswerTextChange = (e) => {
        setNewAnswerContent(e.target.value);
      };

    const onClickSubmit = ()=> {
        // const data = new Date();
        
        //   console.log("invalid answer!")
      if (!newAnswerContent){ setInvalidAnswer(true); return;}


        addAnswerHandler(newAnswerContent);
        setNewAnswerContent('');
        setInvalidAnswer(false);

    }



    return (
        <>
        <CreateWrap>
            <CreateBlock>
                <CreateHeader>답변작성</CreateHeader>
                {invalidAnswer ? <span>내용을 입력해주세요.</span> : null}
                <EditorBlock>
                    <EditorInput type="text" onChange={onAnswerTextChange} value={newAnswerContent}/>
                <CreateButtonLogin onClick={onClickSubmit}>작성하기</CreateButtonLogin>
                </EditorBlock>
            </CreateBlock>
        </CreateWrap>
        </>

    )
}

export default AnswerLogin