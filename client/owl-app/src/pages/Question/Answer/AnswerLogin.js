import styled from "styled-components"
import {CreateWrap,CreateBlock, CreateHeader,CreateButtonLogin} from './AnswerStyle'
import { useState } from "react"



const EditorBlock =styled.div`
    height: 500px;
  min-height: 400px;
  margin-bottom: 30px;
`

const EditorInput =styled.textarea`
width: 100%;
height: 300px;
display: flex;
border: none;
resize: none;
outline: none;
margin-bottom: 10px;
padding: 15px 10px;
overflow: auto;
${'' /* border-radius: 10px; */}
font-size: 1em;
font-family: 'TheJamsil', sans-serif;
font-weight: var(--fonts-weight-regular);
background: var(--colors-answerInput-content);
color: var(--colors-text-default);
white-space: pre-line;
border: 1px solid var(--colors-answerInput-border);


&::placeholder{
    color: var(--colors-text-placeholder-dark);
    font-weight: var(--fonts-weight-regular);
}
&:focus, &:active{
    border: 1px solid var(--colors-yellow);
}
`

const ErrorMessage = styled.span`
    color: var(--colors-error);
`


const AnswerLogin = ({addAnswerHandler}) => {
    const [newAnswerContent, setNewAnswerContent] = useState('');
    const [invalidAnswer, setInvalidAnswer] = useState(false);

    const editorRef = useRef();


    const onAnswerTextChange = (e) => {

        setNewAnswerContent(e.target.value)
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
                {invalidAnswer ? <ErrorMessage>내용을 입력해주세요.</ErrorMessage> : null}
                <EditorBlock>
                    <EditorInput type='text' onChange={onAnswerTextChange} value={newAnswerContent} />
                <CreateButtonLogin onClick={onClickSubmit}>작성하기</CreateButtonLogin>
                </EditorBlock>
            </CreateBlock>
        </CreateWrap>
        </>

    )
}

export default AnswerLogin