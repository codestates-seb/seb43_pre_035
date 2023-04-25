import axios from 'axios';

const HandleSignup = async ({ Name, displayName, email, password, avatarLink }) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_URL_NGROKTEST}/users/signup`, {
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