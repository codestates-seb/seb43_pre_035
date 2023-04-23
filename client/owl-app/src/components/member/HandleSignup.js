import axios from 'axios';

const HandleSignup = async ({ Name, displayName, email, password, avatarLink }) => {
  try {
    const response = await axios.post('https://24d1-124-61-224-204.ngrok-free.app/users/signup', {
      Name,
      displayName,
      email,
      password,
      avatarLink
    });
    console.log(response.data); // 서버로부터 받은 응답 데이터 확인
    alert('회원가입이 완료되었습니다.');
  } catch (error) {
    console.error(error);
    alert('회원가입에 실패했습니다.');
  }
};
export default HandleSignup;