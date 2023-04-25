import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const HandleSignup = async ({ Name, displayName, email, password, avatarLink }) => {

  // const navigate = useNavigate();
  // console.log({
  //       name: Name,
  //       dsplayName: displayName,
  //       email: email,
  //       password: password,
  //       avatarLink: avatarLink
  //     });
  try {
    const response = await axios.post(`${process.env.REACT_APP_URL_NGROKTEST}/users/signup`, {
      name: Name,
      displayName,
      email,
      password,
      avatarLink
    });
    console.log(response.data); // 서버로부터 받은 응답 데이터 확인
    alert('회원가입이 완료되었습니다.');
    // navigate('/');//안먹힘
  } catch (error) {
    console.error(error);
    alert('이미 회원가입된 이메일 또는 displayName입니다.');
  }
};
export default HandleSignup;