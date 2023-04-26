import { useState, useContext } from 'react';
import styled from 'styled-components';
import HandleLogin from './HandleLogin';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const Form = styled.form`
 display: flex;
 flex-direction: column;
 align-items: center;
 border: 2px solid #9D5353;
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

function EmailPasswordForm({ isOpen, onSubmit, setIsLoggedIn, toggleLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleUserLogin } = useContext(UserContext);

    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!isValidEmail(email)) {
            alert('정확한 이메일 주소를 입력해주세요.');
            return;
        }
        console.log('Email:', email);
        console.log('Password:', password);

        const userData  = await HandleLogin({ email, password });
        console.log('handling: ', userData);
        handleUserLogin(userData);

        if (isOpen) onSubmit();
        if (!isOpen) navigate('/');

    };

    const isValidEmail = (email) => {
        const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return regex.test(email);
    };

    const handleLogin = () =>{
        if (isOpen) onSubmit(); //closing the modal window
        setIsLoggedIn(true);
        if (!isOpen) navigate(-1);
    }

    return (
        <>
            <Form onSubmit={handleSubmit} >
                <InputContainer>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input type="email" id="email" value={email} onChange={handleEmailChange} />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input type="password" id="password" value={password} onChange={handlePasswordChange} />
                </InputContainer>
                <ForgotPassword>Forgot password?</ForgotPassword>
                <LoginButton type="submit" >Log In</LoginButton>
            </Form>
            <SignUpContainer>
                <BeforeSignUp>Don’t have an account?</BeforeSignUp>
                <Link to="/signup" onClick={onSubmit}>
                    <SignUp>Sign up</SignUp>
                </Link>
                <SignUp onClick={handleLogin}>Test Login</SignUp>
            </SignUpContainer>
        </>
    );
}

export default EmailPasswordForm;