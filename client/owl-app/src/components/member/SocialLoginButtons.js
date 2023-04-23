import React, { useEffect } from 'react';
import styled from 'styled-components'
import handleCredentialResponse from './handleCredentialResponse';

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

function SocialLoginButtons({ onSubmit }) {

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: '687801549261-t1to0l0fur981fqvmsk307cvn29bmen0.apps.googleusercontent.com',
          scope: 'profile email',
        })
        .then(() => {
          const authInstance = window.gapi.auth2.getAuthInstance();
          // authInstance로 로그인, 로그아웃 등을 처리
        });
    });
  }, []);

  const handleGoogleLogin = () => {
    const authInstance = window.gapi.auth2.getAuthInstance();
    authInstance.grantOfflineAccess().then((response) => {
      console.log(response);
      handleCredentialResponse(response);
    }).catch((error) => {
      console.error('Google login error:', error);
      // 여기에 구글 로그인 실패? handleCredentialResponse.js에서 할까?
    });
  };

  return (
    <ButtonContainer>
      <GoogleButton onClick={handleGoogleLogin}>
        <GoogleButtonLogo src="glogo.svg" />
        <GoogleButtonText>Login with Google</GoogleButtonText>
      </GoogleButton>
      <KakaoButton onClick={onSubmit}>
        <KakaoButtonLogo src="kakaotalk.svg" />
        <KakaoButtonText>Login with KakaoTalk</KakaoButtonText>
      </KakaoButton>
      <GithubButton onClick={onSubmit}>
        <GithubButtonLogo src="github.svg" />
        <GithubButtonText>Login with Github</GithubButtonText>
      </GithubButton>
    </ButtonContainer>
  );
}

export default SocialLoginButtons;