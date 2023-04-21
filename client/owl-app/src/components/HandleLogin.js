import axios from 'axios';
  

const handleLogin = async ({ email, password, dispatch }) => {
  try {
    const response = await axios.post('https://24d1-124-61-224-204.ngrok-free.app/users/login', {
      email,
      password,
    });
    console.log(response.data); // 서버로부터 받은 응답 데이터 확인

    const token = response.headers.authorization;
    console.log('JWT Token:', token);

    // JWT 토큰을 로컬 스토리지에 저장
    localStorage.setItem('token', token);
  
    // Redux?
    dispatch({ type: 'LOGIN', payload: response.data });
    // 전역 상태에 사용자 정보 저장

  } catch (error) {
    console.error(error);
    alert('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
  }
};

export default handleLogin;