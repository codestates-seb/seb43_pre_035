import React from 'react';
import styled from 'styled-components';
import EmailPasswordForm from '../components/member/EmailPasswordForm';
import SocialLoginButtons from '../components/member/SocialLoginButtons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 110%;
  background-color:#322A28 ;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

function Login() {
  return (
    <Container>
      <Logo src="logo.svg" />
      <SocialLoginButtons/>
      <EmailPasswordForm />
    </Container>
  );
}

export default Login;