import axios from 'axios';
import Login from '../pages/Login';

const HandleLogin = async ({ email, password }) => {
  try {
    const response = await axios.post('http://localhost:4000/login', {
      email,
      password,
    });
    console.log(response.data); // 서버로부터 받은 응답 데이터 확인
  } catch (error) {
    console.error(error);
  }
};

export default HandleLogin;