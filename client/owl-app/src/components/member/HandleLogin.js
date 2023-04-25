import axios from 'axios';
// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;


const HandleLogin = async ({ email, password }) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_URL_NGROKTEST}/users/login`, {
      email,
      password
    });
    console.log("서버로부터 받은 로그인확인 정보", response.data); // 서버로부터 받은 응답 데이터 확인
    // console.log("response 객체", response.headers);
    const token = response.headers.authorization;
    // console.log('JWT Token:', token);

    // JWT 토큰을 로컬 스토리지에 저장
    // localStorage.setItem('token', token);
    // console.log('local storage:', token);

    // dispatch({ type: 'LOGIN', payload: response.data });
    // 전역 상태에 사용자 정보 저장
    return [response.data, token];

  } catch (error) {
    console.error(error);
    alert('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
  }
}

export default HandleLogin;