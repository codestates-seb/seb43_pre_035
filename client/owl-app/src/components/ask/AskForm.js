import styled from 'styled-components';
import axios from 'axios';
import FormInput from './FormInput';
import { useState, useEffect } from 'react';
import { ClickButton } from '../../styles/UIStyles.js';
import { useNavigate } from 'react-router-dom';

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

const convertDate = (string) => {
    return `${string.substring(0, 4)}년 ${String(Number(string.substring(5, 7)))}월 ${String(Number(string.substring(8, 10)))}일`
  }

const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

const AskForm = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const url_avatars = "https://mypreprojecttempbucket.s3.ap-northeast-2.amazonaws.com";
    const url_threads = `${process.env.REACT_APP_URL_JSON_QUESTIONS}`;
    const url_threads_test = `${process.env.REACT_APP_URL_NGROKTEST}/questions`

    //default avatar images to shuffle ----- for signup.
    const AvatDefaultUrls = [];
    const imgNum = 8;
    let imgIdx = 0;
    for (let i = 1; i <= imgNum; i++) AvatDefaultUrls.push(`${url_avatars}/owl0${i}.png`);
    shuffle(AvatDefaultUrls);

    const headers = { headers :
        {Authorization : `Bearer ${process.env.REACT_APP_NGROK_TOKEN}`}
    };

    const submitThreadHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();

        //if it's the last image, shuffle again
        if (imgIdx >= imgNum-1){
            imgIdx = 0;
            shuffle(AvatDefaultUrls);
          }else{
            imgIdx++;
          }

        axios.post(url_threads_test, {'title': title, 'content': content}, headers)
        .then((res) => {console.log("axios ask post request success!", res)
          navigate('/');
          navigate(0);
        })
        .catch((err) => {console.log("axios post request fail!", err)})
        // .then(() => {
        //     navigate('/');
        //     navigate(0);
        // })

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