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

    const [newData,setnewData] = useState({
        "answer" : [{

            "id" : '',
            "content" : ''
        },
    ]
    })

    

    const handlSubmit = () => {

            setViewContent(viewContent.concat({...newData}))
    }

    const [viewContent, setViewContent] = useState([initialData.questions])

    console.log(viewContent);
    // const getValue = e => {
    
    //     const { name, value } = e.target;
    //     setnewData({
    //         ...newData,
    //         [name]: value
    //     })
    //     console.log(newData);
    // };


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
                    const data = editor.getData();;
                    setnewData({
                        ...newData,
                        content: data
                    })
                    console.log(newData)
                } }
                onBlur={ ( event, editor ) => {

                } }
                onFocus={ ( event, editor ) => {

                } }
            />
                </EditorBlock>
                <CreateButtonLogin onClick={handlSubmit}>작성하기</CreateButtonLogin>
            </CreateBlock>
        </CreateWrap>
        </>

    )
}

export default AnswerLogin