import axios from 'axios';
<<<<<<< HEAD
// import { useUserDispatch } from './UserContext';
=======
// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;

>>>>>>> c45cfc4b5595b170944f659a02f5987b1eb791ab

const HandleLogin = async ({ email, password }) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_URL_NGROKTEST}/users/login`, {
      email,
      password
    });
    // console.log("서버로부터 받은 로그인확인 정보", response.data); // 서버로부터 받은 응답 데이터 확인
    // console.log("response 객체", response.headers);
    const token = response.headers.authorization;
    console.log('JWT Token:', token);

    // JWT 토큰을 로컬 스토리지에 저장
    localStorage.setItem('userInfo', JSON.stringify({
      isLoggedIn: true,
      ...response.data
    }));
    localStorage.setItem('token', token);

    return response.data;

  } catch (error) {
    console.error(error);
    alert('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
  }
}

<<<<<<< HEAD
export default handleLogin;

// const HandleLogin = () => {
//   const userDispatch = useUserDispatch(); //전역함수 불러오기..

//   const handleLogin = async ({ email, password }) => {
//     try {
//       const response = await axios.post('https://24d1-124-61-224-204.ngrok-free.app/users/login', {
//         email,
//         password,
//       });
//       console.log(response.data); // 서버로부터 받은 응답 데이터 확인

//       const token = response.headers.authorization;
//       console.log('JWT Token:', token);

      // JWT 토큰을 로컬 스토리지에 저장
      // localStorage.setItem('token', token);
    
      // 전역 상태에 사용자 정보 저장
      // dispatch({ type: 'LOGIN', payload: response.data });
//   보내준 API가 이런 객체로 들어옴 (user 객체 안에) {
//        "memberId": 1,
//        "email": "hgd@gmail.com",
//        "name": "홍길동",
//        "avatarLink": "link",
//        "displayName": "gildonglove123",
//        "roles": [
//                       "ROLE_USER"
//                     ]
// }

//     } catch (error) {
//       console.error(error);
//       alert('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
//     }
//   };

//   return handleLogin;
// };

// export default HandleLogin;


// 아래 방식으로 유저정보를 user객체로 가져옴
//import { useUserState } from './UserContext'; 전역상태의 정보를 받아옴.
// function UserInfo() {
//   const { user } = useUserState();

//   if (!user) {
//     return null
//   }
=======
export default HandleLogin;
>>>>>>> c45cfc4b5595b170944f659a02f5987b1eb791ab
