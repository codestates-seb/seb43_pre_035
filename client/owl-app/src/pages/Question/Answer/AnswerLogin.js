import styled, {css} from "styled-components"
import {CreateWrap,CreateBlock, CreateHeader,CreateEditorLogIn,CreateButtonLogin} from './AnswerStyle'
import React, {Component} from "react"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState,useEffect } from "react";
import { initialData } from "../../../data/dummyQuestion";


const EditorBlock =styled.div`
    height: 500px;
    .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
  min-height: 400px;
  margin-bottom: 30px;
  color : black
}
`




const AnswerLogin = ({addAnswerHandler}) => {

    const [addnew,setAddnew] = useState("")

    const onClickSubmit = ()=> {

        let newAnswer = {
            "id" : "1",
            "member" : "zeereo",
            "content" : "addnew"
        };

        addAnswerHandler(newAnswer)
    }
    
   
   

    return (
        <>
        <CreateWrap>
            <CreateBlock>
                <CreateHeader>답변작성</CreateHeader>
                <EditorBlock>
                <CKEditor
                editor={ ClassicEditor }
                data=""
                onInit={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    
                    console.log(data)
                } }
                onBlur={ ( event, editor ) => {

                } }
                onFocus={ ( event, editor ) => {

                } }
            />
                </EditorBlock>
                <CreateButtonLogin onClick={onClickSubmit}>작성하기</CreateButtonLogin>
            </CreateBlock>
        </CreateWrap>
        </>

    )
}

export default AnswerLogin