import { useState } from 'react';
import styled from 'styled-components';
import HandleSignup from '../components/member/HandleSignup';
import { Link, useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 110%;
  background-color:#322A28 ;
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


const SignupContainer = styled.form`
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
 margin-bottom: 15px;
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


const Guide = styled.div`
 text-align: left;
 margin-bottom: 10px;
 margin-left: 30px;
 margin-right: 5px;
 font-size: 12px;
 cursor: pointer;
 width: 300px;
 color: #fff;
`;


const BeforeLogin = styled.div`
 font-size: 14px;
 text-align: right;
 width: 240px;
 display: inline-block;
 color: #fff;
`;


const LoginButton = styled.div`
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


const SignUpButton = styled.button`
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

const LoginContainer = styled.div`
 display: flex;
 justify-content: flex-end;
 width: 300px;
`;


function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function SignUp() {

  const url_avatars = "https://mypreprojecttempbucket.s3.ap-northeast-2.amazonaws.com";
  const avatarRandom = `${url_avatars}/owl0${randomIntFromInterval(1, 8)}.png`;

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    Name: '',
    displayName: '',
    email: '',
    password: '',
    avatarLink: avatarRandom
  });

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,16}$/;
    return re.test(password);
  };

  const validateDisplayName = (displayName) => {
    const re = /^[a-zA-Z0-9가-힣]{2,15}$/;
    return re.test(displayName);
  };

  const updateUserInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  const handleSignup = async (event) => {
    event.preventDefault();

    if (!validateEmail(userInfo.email)) {
      alert('이메일이 올바른 형식이 아닙니다.');
      return;
    }

    if (!validatePassword(userInfo.password)) {
      alert('비밀번호는 8~16자 영문 대소문자, 숫자, 특수문자를 포함해야 합니다.');
      return;
    }

    if (!validateDisplayName(userInfo.displayName)) {
      alert('닉네임은 특수문자를 제외한 2~15자리여야 합니다.');
      return;
    }

    // console.log('name:', userInfo.Name, ' displayName:', userInfo.displayName,
    //     ' email:', userInfo.email, ' password:', userInfo.password, " link:", userInfo.avatarLink
    // );
    await HandleSignup({
      Name: userInfo.Name,
      displayName: userInfo.displayName,
      email: userInfo.email,
      password: userInfo.password,
      avatarLink: userInfo.avatarLink
    });

    navigate('/login');
  };


  return (
    <Container>
      <ButtonContainer>
        <GoogleButton>
          <GoogleButtonLogo src="glogo.svg" />
          <GoogleButtonText>Sign up with Google</GoogleButtonText>
        </GoogleButton>
        <KakaoButton>
          <KakaoButtonLogo src="kakaotalk.svg" />
          <KakaoButtonText>Sign up with KakaoTalk</KakaoButtonText>
        </KakaoButton>
        <GithubButton>
          <GithubButtonLogo src="github.svg" />
          <GithubButtonText>Sign up with Github</GithubButtonText>
        </GithubButton>
      </ButtonContainer>
      <SignupContainer onSubmit={handleSignup}>
        <InputContainer>
          <InputLabel htmlFor="DisplayName">Display name</InputLabel>
          <Input type="text" name="displayName" value={userInfo.displayName} onChange={updateUserInfo} />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="Name">Name</InputLabel>
          <Input type="text" name="Name" value={userInfo.Name} onChange={updateUserInfo} />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input type="email" name="email" value={userInfo.email} onChange={updateUserInfo} />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input type="password" name="password" value={userInfo.password} onChange={updateUserInfo} />
        </InputContainer>

        <Guide>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</Guide>
        <SignUpButton type="submit">Sign Up</SignUpButton>
        <Guide>By clicking “Sign up”, you agree to our terms of service, privacy policy and cookie policy</Guide>
      </SignupContainer>
      <LoginContainer>
        <BeforeLogin>Already have an account?</BeforeLogin>
        <Link to="/login">
          <LoginButton>Log in</LoginButton>
        </Link>
      </LoginContainer>
    </Container>
  );
}

export default SignUp;