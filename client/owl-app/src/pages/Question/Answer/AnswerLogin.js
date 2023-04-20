import styled, {css} from "styled-components"
import {CreateWrap,CreateBlock, CreateHeader,CreateEditorLogIn,CreateButtonLogin} from './AnswerStyle'
import React, {Component} from "react"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState,useEffect } from "react";
import { initialData } from "../../../data/dummyQuestion";

const EditorBlock =styled.div`
    min-height: 500px;
    .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
  min-height: 500px;
  margin-bottom: 30px;
  color : black
}
`




const AnswerLogin = () => {

    const newSubmitData = initialData.questions

    const [value,setValue] = useState([])


    const handleSubmit = () =>{
       
        console.log(value)
    }

    return (
        <>
        <CreateWrap>
            <CreateBlock>
                <CreateHeader>답변작성</CreateHeader>
                <EditorBlock>
                <CKEditor 
                    editor={ ClassicEditor }
                    config={{
                        placeholder : "답변 내용을 입력하세요",
                    }}
                    data="<p></p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }/>
                </EditorBlock>
                <CreateButtonLogin onClick={handleSubmit}>작성하기</CreateButtonLogin>
            </CreateBlock>
        </CreateWrap>
        </>

    )
}

export default AnswerLogin