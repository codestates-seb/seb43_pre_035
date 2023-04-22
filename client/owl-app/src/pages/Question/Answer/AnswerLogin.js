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
    const [newAnswerContent, setNewAnswerContent] = useState('');
    const [invalidAnswer, setInvalidAnswer] = useState(false);

    const onAnswerTextChange = (e) => {
        setNewAnswerContent(e.target.value);
      };

    const onClickSubmit = ()=> {
      if (!newAnswerContent){console.log("invalid answer!"); setInvalidAnswer(true); return;}
        let newAnswer =
            {
              "id": "1",
              "createdDate": "2022-05-16T02:09:52Z",
              "updateDate": "2022-05-16T02:09:52Z",
              "url": "https://github.com/codestates-seb/agora-states-fe/discussions/45#discussioncomment-2756236",
              "member": {
                "displayName": "zzzzzzoooooooooo"
              },
              "content": newAnswerContent,
              "answerReplies": [
                // {
                //   "member": {
                //     "displayName": "dubipy",
                //     "avatarLink": "https://mypreprojecttempbucket.s3.ap-northeast-2.amazonaws.com/owl08.png"
                //   },
                //   "createdDate": "2022-05-16T01:02:17Z",
                //   "updateDate": "2022-05-16T01:02:17Z",
                //   "content": "bash파일이 꼬여있어서 삭제 후 다시 설치하고 경로 잡아줬습니다 node 부분도 설치는 되어있는데 패키지 쪽에 에러가 발생해서 모두 삭제 후 재설치 해주고 npm install 하니 해결됐습니다 감사합니다"
                // }
              ]
            }


        addAnswerHandler(newAnswer);
        setNewAnswerContent('');
        setInvalidAnswer(false);


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