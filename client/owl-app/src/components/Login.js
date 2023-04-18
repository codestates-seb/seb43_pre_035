import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
  background-color: #DB4437;
  background-image: "googlelogo.png";
  background-repeat: no-repeat;
  background-position: center center;
  padding-left: 20px;
  line-height: 30px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  width: 340px;
`;

const KakaotalkButton = styled.button`
  background-color: #FFCD00;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  width: 340px;
`;

const GithubButton = styled.button`
  background-color: #211F1F;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  width: 340px;
`;

const Logincontainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #9D5353;
  border: 1px solid #ccc;
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
  margin-bottom: 10px;
  font-size: 14px;
  cursor: pointer;
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
  width: 300px;
`;

const BeforeSignUp = styled.div`
  font-size: 14px;
  text-align: center;
`;

const SignUp = styled.div`
  font-size: 14px;
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Logo src="logo192.png" alt="Logo" />
      <ButtonContainer>
        <GoogleButton>Login with Google</GoogleButton>
        <KakaotalkButton>Login with KakaoTalk</KakaotalkButton>
        <GithubButton>Login with GitHub</GithubButton>
      </ButtonContainer>
      <Logincontainer>
        <InputContainer>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input type="email" id="email" />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input type="password" id="password" />
        </InputContainer>
        <ForgotPassword>Forgot password?</ForgotPassword>
        <LoginButton>Log In</LoginButton>
      </Logincontainer>
      <BeforeSignUp>Don’t have an account?</BeforeSignUp>
      <SignUp>Sign up</SignUp>
    </Container>
  );
}

export default App;