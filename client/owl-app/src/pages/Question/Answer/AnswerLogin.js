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

const EditorInput =styled.input`
    height: 400px;
    width: 100%;
`



const AnswerLogin = ({addAnswerHandler}) => {
    const [newAnswerContent, setNewAnswerContent] = useState('');
    const [invalidAnswer, setInvalidAnswer] = useState(false);
    const[aId, setaId] = useState(Math.floor(Math.random()*1000));

    const onAnswerTextChange = (e) => {
        setNewAnswerContent(e.target.value);
      };

    const onClickSubmit = ()=> {
        const data = new Date();
        const userName = "null"
        const userAvatarLink = "null"

      if (!newAnswerContent){console.log("invalid answer!"); setInvalidAnswer(true); return;}
        let newAnswer =
            {
              "id": aId,
              "createdDate": data.toISOString(),
              "updateDate": data.toISOString(),
              "member": {
                "displayName": userName, 
                "avatarLink" : userAvatarLink
              },
              "content": newAnswerContent,
              "answerReplies": [
              ]
            }


        addAnswerHandler(newAnswer);
        setNewAnswerContent('');
        setInvalidAnswer(false);
        setaId(Math.floor(Math.random()*1000));


        console.log(newAnswerContent)
    }



    return (
        <>
        <CreateWrap>
            <CreateBlock>
                <CreateHeader>답변작성</CreateHeader>
                {invalidAnswer ? <span>내용을 입력해주세요.</span> : null}
                <EditorBlock>
                    <EditorInput type="text" onChange={onAnswerTextChange} value={newAnswerContent}/>
                </EditorBlock>
                <CreateButtonLogin onClick={onClickSubmit}>작성하기</CreateButtonLogin>
            </CreateBlock>
        </CreateWrap>
        </>

    )
}

export default AnswerLogin