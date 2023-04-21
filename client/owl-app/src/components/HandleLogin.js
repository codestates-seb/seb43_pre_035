import axios from 'axios';
import Login from '../pages/Login';

const handleLogin = async ({ email, password }) => {
  try {
    const response = await axios.post('http://localhost:8080/users/login', {
      email,
      password,
    });
    console.log(response.data); // 서버로부터 받은 응답 데이터 확인
  } catch (error) {
    console.error(error);
  }
};

export default handleLogin;