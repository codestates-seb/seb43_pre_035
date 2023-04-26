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

function Login({isOpen, onRequestClose, setIsLoggedIn, toggleLogin}) {

  return (
    <Container>
      <Logo src="/logo/logo_pink_2.svg" />
      <SocialLoginButtons/>
      <EmailPasswordForm  isOpen={isOpen}
                          setIsLoggedIn={setIsLoggedIn}
                          onSubmit={onRequestClose}
                          toggleLogin={toggleLogin} />
    </Container>
  );
}

export default Login;