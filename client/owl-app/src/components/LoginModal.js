import styled from 'styled-components';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import handleLogin  from '../components/HandleLogin';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const StyledModal = styled(Modal)`
  .modal-content {
    width: 400px;
    height: 550px;
    border-radius: 3px;
  }
  & .modal-dialog {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 15px;
  right: 15px;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
`;

const LoginModal = ({ show, onHide }) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        handleLogin({ email, password });
    };
    return (
        <StyledModal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Container onSubmit={handleSubmit}>
            <CloseButton onClick={onHide} />
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
                    <ForgotPassword>Forgot password?</ForgotPassword>
                    <LoginButton type="submit">Log In</LoginButton>
                </Logincontainer>
                <SignUpContainer>
                    <BeforeSignUp>Don’t have an account?</BeforeSignUp>
                    <Link to="/signup">
                        <SignUp>Sign up</SignUp>
                    </Link>
                </SignUpContainer>
            </Container>
        </StyledModal>
    );
};

export default LoginModal;