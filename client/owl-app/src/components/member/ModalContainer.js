import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import EmailPasswordForm from './EmailPasswordForm';
import SocialLoginButtons from './SocialLoginButtons';

const Backdrop = styled.div`
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #9D5353;
  border-radius: 5px;
  height: 500px;
  background-color:#322A28 ;
  width: 400px;
`;

function ModalContainer({ isOpen, onRequestClose }) {
    
  return (
    <>
      {isOpen && (
        <Backdrop onClick={onRequestClose}>
          <ModalWrapper onClick={(e) => e.stopPropagation()}>
            <SocialLoginButtons onSubmit={onRequestClose}/>
            <EmailPasswordForm onSubmit={onRequestClose} />
          </ModalWrapper>
        </Backdrop>
      )}
    </>
  );
}

export default ModalContainer;