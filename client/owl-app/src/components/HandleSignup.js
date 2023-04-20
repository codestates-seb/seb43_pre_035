import axios from 'axios';
import SignUp from '../pages/SignUp';

const HandleSignup = async (Name, displayName, email, password) => {
    try {
        const response = await axios.post('https://1ec1-124-61-224-204.ngrok-free.app/users/signup', {
      Name,
      displayName,
      email,
      password
    });
    console.log(response.data); // 서버로부터 받은 응답 데이터 확인
    localStorage.setItem('token', response.data.token);

  } catch (error) {
    console.error(error);
  }
};
export default HandleSignup;