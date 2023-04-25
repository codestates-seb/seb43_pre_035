import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useUserDispatch, useUserState } from './UserContext';


const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalWrapper = styled.div`
  background-color: white;
  padding: 20px;
  width: 500px;
  border-radius: 5px;
  background-color: rgba(157, 83, 83, 0.8);
  border: 2px solid #9D5353;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
`;

const EditProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
`;

const SubmitButton = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
`;
  
  const validatePassword = (password) => {
    const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,16}$/;
    return re.test(password);
  };
  
  const validateDisplayName = (displayName) => {
    const re = /^[a-zA-Z0-9가-힣]{2,15}$/;
    return re.test(displayName);
  };

const EditProfileModal = ({ isOpen, onRequestClose }) => {
    const userState = useUserState();
    const userDispatch = useUserDispatch();
    const [name, setName] = useState(userState.user.name);
    const [displayName, setDisplayName] = useState(userState.user.displayName);
    const [password, setPassword] = useState('');
  

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDisplayNameChange = (event) => {
    setDisplayName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validatePassword(password)) {
      alert('비밀번호는 8~16자 영문 대소문자, 숫자, 특수문자를 포함해야 합니다.');
      return;
    }

    if (!validateDisplayName(displayName)) {
      alert('닉네임은 특수문자를 제외한 2~15자리여야 합니다.');
      return;
    }

    try {
      const response = await axios.put(`${process.env.REACT_APP_URL_NGROKTEST}users/${userState.user.memberId}`, {
        name,
        displayName,
        password,
      });

      // 업데이트된 사용자 정보를 UserProvider에 반영
      userDispatch({ type: 'UPDATE_USER', payload: response.data });

      onRequestClose();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <>
      {isOpen && (
        <ModalBackdrop onClick={onRequestClose}>
          <ModalWrapper onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={onRequestClose}>&times;</CloseButton>
            <EditProfileForm onSubmit={handleSubmit}>
              <FormField>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                />
              </FormField>
              <FormField>
                <Label htmlFor="displayName">Display Name</Label>
                <Input
                  type="text"
                  id="displayName"
                  value={displayName}
                  onChange={handleDisplayNameChange}
                />
              </FormField>
              <FormField>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </FormField>
              <SubmitButton type="submit">Save Profile</SubmitButton>
            </EditProfileForm>
          </ModalWrapper>
        </ModalBackdrop>
      )}
    </>
  );
};

export default EditProfileModal;