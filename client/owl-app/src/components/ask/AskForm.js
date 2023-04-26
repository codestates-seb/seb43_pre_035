import styled from 'styled-components';
import axios from 'axios';
import FormInput from './FormInput';
import { useState, useEffect, useContext } from 'react';
import { ClickButton } from '../../styles/UIStyles.js';
import { useNavigate } from 'react-router-dom';
import { axiosAuth } from '../../utils/axiosConfig';
import { UserContext } from '../../App';


// import  useApiHeaders from '../../utils/useApiHeaders';
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



const AskForm = ({openModal}) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const { isLoggedIn } = useContext(UserContext);
    // const token = localStorage.getItem('token');

    // const url_threads = `${process.env.REACT_APP_URL_JSON_QUESTIONS}`;
    const url_threads_test = `${process.env.REACT_APP_URL_NGROKTEST}/questions`

    const submitThreadHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if(!isLoggedIn) {openModal(); return;}
        console.log('question submitted!');

        axiosAuth.post(url_threads_test, {'title': title, 'content': content})
        .then((res) => {console.log("axios ask post request success!", res)

          navigate('/');
        //   console.log('token:', token);
          navigate(0);
        })
        .catch((err) => {console.log("axios post request fail!", err)})
        // .then(() => {
        //     navigate('/');
        //     navigate(0);
        // })

    }

    const notLoggedHandler = () => {

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
            <SubmitButton>작성하기</SubmitButton>
        </FormWrapper>
    )
}

export default AskForm;