import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { axiosAuth2 } from '../../utils/axiosConfig';


const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  `;

const ModalWrapper = styled.div`
    background-color: white;
    padding: 20px;
    width: 300px;
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

const EmailText = styled.label`
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: bold;
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

const AlertText = styled.div`
    color: red;
    font-size: 12px;
    margin-top: 5px;
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

const DeleteButton = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 13px;
  padding: 5px 10px;
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

const EditProfileModal = ({ isOpen, onRequestClose, userFullInfo: propsUserFullInfo }) => {
  const [name, setName] = useState(propsUserFullInfo?.name);
  const [displayName, setDisplayName] = useState(propsUserFullInfo?.displayName);
  const [password, setPassword] = useState('');
  const [member_id, setMember_id] = useState(propsUserFullInfo);
  const [displayNameAlert, setDisplayNameAlert] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState(false);
  const history = useNavigate();
  const [isNameValid, setIsNameValid] = useState(true);
  const [isDisplayNameValid, setIsDisplayNameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);

  // console.log("displayname:",propsUserFullInfo?.displayName)
  // console.log("displayname2:",displayName)

  useEffect(() => {
    if (!isOpen) {
      setName(propsUserFullInfo?.name);
      setDisplayName(propsUserFullInfo?.displayName);
      setPassword('');
      setMember_id(propsUserFullInfo);
      setDisplayNameAlert(false);
      setPasswordAlert(false);
      setIsNameValid(true);
      setIsDisplayNameValid(true);
      setIsPasswordValid(false);
      setIsPasswordEmpty(true);
    }
  }, [isOpen, propsUserFullInfo]);

  useEffect(() => {
    setName(propsUserFullInfo?.name);
    setDisplayName(propsUserFullInfo?.displayName);
    setMember_id(propsUserFullInfo);
  }, [propsUserFullInfo]);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setIsNameValid(event.target.value.length > 0);
  };

  const handleDisplayNameChange = (event) => {
    setDisplayName(event.target.value);

    if (!validateDisplayName(event.target.value)) {
      setDisplayNameAlert(true);
      setIsDisplayNameValid(false);
    } else {
      setDisplayNameAlert(false);
      setIsDisplayNameValid(true);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsPasswordEmpty(event.target.value === '');
    if (!validatePassword(event.target.value)) {
      setPasswordAlert(true);
      setIsPasswordValid(false);
    } else {
      setPasswordAlert(false);
      setIsPasswordValid(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedData = {};

    if (name !== propsUserFullInfo?.name) {
      updatedData.name = name;
    }

    if (displayName !== propsUserFullInfo?.displayName) {
      if (!validateDisplayName(displayName)) {
        alert('디스플레이 네임은 특수문자를 제외한 2~15자리여야 합니다.');
        return;
      }
      updatedData.displayName = displayName;
    }

    if (password) {
      if (!validatePassword(password)) {
        alert('비밀번호는 8~16자 영문 대소문자, 숫자, 특수문자를 포함해야 합니다.');
        return;
      }
      updatedData.password = password;
    }

    if (Object.keys(updatedData).length === 0) {
      alert('변경된 정보가 없습니다.');
      return;
    }

    updateProfile(updatedData);
  };

  const updateProfile = async (updatedData) => {
    try {
      const response = await axiosAuth2.patch(
        `${process.env.REACT_APP_URL_NGROKTEST}/users/${propsUserFullInfo?.memberId}`,
        updatedData
      );
      console.log(updatedData)
      setMember_id(response.data);
      onRequestClose();
      alert('회원 정보가 수정되었습니다.');
      history(0)
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('회원 정보 수정 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const deleteProfile = async () => {
    if (window.confirm('정말로 회원 탈퇴를 하시겠습니까?')) {
      try {
        await axiosAuth2.delete(
          `${process.env.REACT_APP_URL_NGROKTEST}/users/${propsUserFullInfo.memberId}`
        );
        alert('회원 탈퇴가 완료되었습니다.');
        onRequestClose();
        history.push('/');
      } catch (error) {
        console.error('Error deleting profile:', error);
        alert('회원 탈퇴 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    }
  };


  return (
    <>
      {isOpen && (
        <ModalBackdrop onClick={onRequestClose}>
          <ModalWrapper onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={onRequestClose}>&times;</CloseButton>
            <EditProfileForm onSubmit={handleSubmit}>
              <EmailText htmlFor="Email">{propsUserFullInfo?.email}</EmailText>
              <DeleteButton type="button" onClick={deleteProfile}>Delete Profile</DeleteButton>
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
                {displayNameAlert && (
                  <AlertText>
                    디스플레이 네임은 특수문자를 제외한 2~15자리여야 합니다.
                  </AlertText>
                )}
              </FormField>
              <FormField>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordAlert && (
                  <AlertText>
                    비밀번호는 8~16자 영문 대소문자, 숫자, 특수문자를 포함해야 합니다.
                  </AlertText>
                )}
              </FormField>
              <SubmitButton
                type="submit"
                disabled={!isNameValid || !isDisplayNameValid || (!isPasswordValid && !isPasswordEmpty)}>
                Save Profile</SubmitButton>
            </EditProfileForm>
          </ModalWrapper>
        </ModalBackdrop>
      )}
    </>
  );
};

export default EditProfileModal;
