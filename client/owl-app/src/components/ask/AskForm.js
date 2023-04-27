import styled from 'styled-components';
import FormInput from './FormInput';
import { useState, useContext } from 'react';
import { ClickButton } from '../../styles/UIStyles.js';
import { useNavigate } from 'react-router-dom';
import { axiosAuth } from '../../utils/axiosConfig';
import { UserContext } from '../../utils/UserContextConfig';


const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: var(--colors-mediumbrown);
    padding: 10px 20px 30px 20px;
    ${'' /* padding-bottom: 30px; */}
    border-radius: 25px;
`

const SubmitButton = styled(ClickButton)`
    display: flex;
    align-self: flex-end;
    justify-content: center;
    min-width: 50px;
    padding: 10px 30px;
`

const ErrorMessage = styled.span`
    display: flex;
    align-self: flex-end;
    ${'' /* align: right; */}
    padding-right: 5px;
    padding-bottom: 10px;
    color: var(--colors-error);
`

const validityCheck = (title, content) => {
    if (!title || !content) return false;
    return true;
}



const AskForm = ({openModal}) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isValid, setIsValid] = useState(true);
    const navigate = useNavigate();

    const { isLoggedIn } = useContext(UserContext);

    const url_threads_test = `${process.env.REACT_APP_URL_NGROKTEST}/questions`

    const submitThreadHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if(!isLoggedIn) {openModal(); return;}
        if(!validityCheck(title, content)) {
            setIsValid(false);
            return;
        }else{
            setIsValid(true);
        }
        // console.log('question submitted!');

        axiosAuth.post(url_threads_test, {'title': title, 'content': content})
        .then((res) => {console.log("axios ask post request success!", res)
          navigate('/');
          navigate(0);
        })
        .catch((err) => {console.log("axios post request fail!", err)})
    }

    return (
        <FormWrapper onSubmit={submitThreadHandler}>
            <FormInput  id="title"
                        label="제목"
                        placeholder="제목에 문제의 요지를 담아주세요"
                        height="1"
                        value={title}
                        setValue={setTitle}
            />
            <FormInput id="content"
                        label="무엇에 어려움을 겪고 계신가요?"
                        placeholder="해결하려는 문제를 어떻게 겪게 됐는지, 그리고 문제를 해결하기 위해 어떤 노력을 했는지 최대한 상세하게, 되도록이면 코드까지 포함해서 설명해주세요."
                        height="20"
                        value={content}
                        setValue={setContent}
            />
           { !isValid ? <ErrorMessage>제목과 내용을 작성해주세요.</ErrorMessage>: ''}
            <SubmitButton>작성하기</SubmitButton>
        </FormWrapper>
    )
}

export default AskForm;