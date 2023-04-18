import styled from 'styled-components';

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
  width: 340px;
  background-color: rgba(157, 83, 83, 0.2);
  &:hover {
    cursor: pointer;
  }
`;

const GoogleButtonLogo = styled.img`
  height: 25px;
  margin-right: 10px;
  margin-left: 40px;
`;

const GoogleButtonText = styled.span`
  margin-right: 80px;
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
  width: 340px;
  background-color: rgba(157, 83, 83, 0.2);

  &:hover {
    cursor: pointer;
  }
`;

const KakaoButtonLogo = styled.img`
  height: 25px;
  margin-right: 15px;
  margin-left: 40px;
`;

const KakaoButtonText = styled.span`
  margin-right: 60px;
  margin-left: -10px;
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
  width: 340px;
  background-color: rgba(157, 83, 83, 0.2);

  &:hover {
    cursor: pointer;
  }
`;

const GithubButtonLogo = styled.img`
  height: 25px;
  margin-right: 10px;
  margin-left: 40px;
`;

const GithubButtonText = styled.span`
  margin-right: 85px;
  margin-left: 0px;
`;


const SignUpcontainer = styled.form`
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


const Login = styled.div`
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
 width: 300px;
 &:hover {
    cursor: pointer;
  }
`;

const SignUpContainer = styled.div`
 display: flex;
 justify-content: flex-end;
 width: 300px;
`;

function App() {
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
<SignUpcontainer>
<InputContainer>
<InputLabel htmlFor="DisplayName">Display name</InputLabel>
<Input type="DisplayName" id="DisplayName" />
</InputContainer>
<InputContainer>
<InputLabel htmlFor="email">Email</InputLabel>
<Input type="email" id="email" />
</InputContainer>
<InputContainer>
<InputLabel htmlFor="password">Password</InputLabel>
<Input type="password" id="password" />
</InputContainer>
<Guide>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</Guide>
<SignUpButton>Sign Up</SignUpButton>
<Guide>By clicking “Sign up”, you agree to our terms of service, privacy policy and cookie policy</Guide>
</SignUpcontainer>
<SignUpContainer>
<BeforeLogin>Already have an account?</BeforeLogin>
<Login>Log in</Login>
</SignUpContainer>
</Container>
);
}

export default App;