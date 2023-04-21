import styled from 'styled-components';
import React, { useState } from 'react';
import HandleLogin from '../components/HandleLogin';
import { Link } from 'react-router-dom';
import LoginModal from '../components/LoginModal'; // 모달창 불러오기
import { useUserDispatch } from '../components/UserContext'; //전역에 로그인 상태 받아오기

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color:#322A28 ;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const GoogleButton = styled.button`
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  justify-content: space-between;
  margin: 0 0 10px;
  padding: 10px;
  width: 300px;
  background-color: rgba(157, 83, 83, 0.2);
  &:hover {
    cursor: pointer;
  }
`;

const GoogleButtonLogo = styled.img`
  height: 25px;
  margin-right: 10px;
  margin-left: 10px;
`;

const GoogleButtonText = styled.span`
  margin-right: 50px;
  margin-left: -20px;
`;

const KakaoButton = styled.button`
  border: 1px solid #EBD729;
  border-radius: 5px;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  justify-content: space-between;
  margin: 0 0 10px;
  padding: 10px;
  width: 300px;
  background-color: rgba(157, 83, 83, 0.2);

  &:hover {
    cursor: pointer;
  }
`;

const KakaoButtonLogo = styled.img`
  height: 25px;
  margin-right: 30px;
  margin-left: 10px;
`;

const KakaoButtonText = styled.span`
  margin-right: 30px;
  margin-left: 0px;
`;

const GithubButton = styled.button`
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  justify-content: space-between;
  margin: 0 0 10px;
  padding: 10px;
  width: 300px;
  background-color: rgba(157, 83, 83, 0.2);

  &:hover {
    cursor: pointer;
  }
`;

const GithubButtonLogo = styled.img`
  height: 25px;
  margin-right: 0px;
  margin-left: 10px;
`;

const GithubButtonText = styled.span`
  margin-right: 50px;
  margin-left: 10px;
`;


const Logincontainer = styled.form`
 border: 2px solid #9D5353;
 display: flex;
 flex-direction: column;
 align-items: center;
 background: rgba(157, 83, 83, 0.2);
 border-radius: 5px;
 padding: 20px;
 width: 300px;
`;

const InputContainer = styled.div` 
 display: flex;
 flex-direction: column;
 width: 100%;
 margin-bottom: 10px;
`;

const InputLabel = styled.label`
 color: #fff;
 margin-bottom: 5px;
`;

const Input = styled.input`
 height: 30px;
 border: 1px solid #ccc;
 border-radius: 5px;
 padding: 5px;
`;


const ForgotPassword = styled.div`
text-align: right;
 margin-bottom: 5px;
 margin-right: 10px;
 font-size: 14px;
 cursor: pointer;
 width: 300px;
 color: #9D5353;
`;


const BeforeSignUp = styled.div`
 font-size: 14px;
 text-align: right;
 width: 240px;
 display: inline-block;
 color: #fff;
`;


const SignUp = styled.div`
 font-size: 14px;
 text-align: left;
 width: 50px;
 display: inline-block;
 margin-left: 10px;
 color: #9D5353;
 text-decoration: underline;
 &:hover {
    cursor: pointer;
  }
`;


const LoginButton = styled.button`
 background-color: #000;
 color: #fff;
 font-size: 16px;
 font-weight: bold;
 padding: 10px 20px;
 border-radius: 5px;
 border: none;
 margin-bottom: 10px;
 width: 280px;
 &:hover {
    cursor: pointer;
  }
`;


const SignUpContainer = styled.div`
 display: flex;
 justify-content: flex-end;
 width: 300px;
`;

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [LoginModalOn, setLoginModalOn] = useState(false); //모달 상태변화
  const dispatch = useUserDispatch(); //전역 상태 받아오기

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      alert('정확한 이메일 주소를 입력해주세요.');
      return;
    }
    if (!isValidPassword(password)) {
      alert('비밀번호는 8~16자의 영문 대소문자, 숫자, 특수문자를 포함해야 합니다.');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
    HandleLogin({ email, password, dispatch });
  };

  const isValidEmail = (email) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  };
  
  const isValidPassword = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*_-]).{8,16}$/;
    return regex.test(password);
  };

  return (
    <>
      <Container onSubmit={handleSubmit}>
        <Logo src="logo.svg" alt="Logo" />
        <ButtonContainer>
          <GoogleButton>
            <GoogleButtonLogo src="glogo.svg" />
            <GoogleButtonText>Login with Google</GoogleButtonText>
          </GoogleButton>
          <KakaoButton>
            <KakaoButtonLogo src="kakaotalk.svg" />
            <KakaoButtonText>Login with KakaoTalk</KakaoButtonText>
          </KakaoButton>
          <GithubButton>
            <GithubButtonLogo src="github.svg" />
            <GithubButtonText>Login with Github</GithubButtonText>
          </GithubButton>
        </ButtonContainer>
        <Logincontainer>
          <InputContainer>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input type="email" id="email" value={email} onChange={handleEmailChange} />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </InputContainer>
            <ForgotPassword onClick={() => setLoginModalOn(true)}>Forgot password?</ForgotPassword>
          <LoginButton type="submit">Log In</LoginButton>
        </Logincontainer>
        <SignUpContainer>
          <BeforeSignUp>Don’t have an account?</BeforeSignUp>
          <Link to="/signup"> 
          <SignUp>Sign up</SignUp>
          </Link>
        </SignUpContainer>
      </Container>
      {LoginModalOn && <LoginModal show={LoginModalOn} onHide={() => setLoginModalOn(false)} />}
      </>
      );
}

      export default Login;

      //화면 최상단에 아래와 같이 구성
//       return (
//         <>
//         <LoginModal show = {LoginModalOn} onHide = {() => setLoginModalOn(false)}/> 
//         -- 기존 내용 --
//         <원하는 버튼 onClick={() => setLoginModalOn(true) 해당 내용 추가> 
//         </>
//       );
//    }