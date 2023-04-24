import { Link } from 'react-router-dom';
import styled from 'styled-components';
import owltime  from './logo_pink.png';
import { TopnavTemplate, LogoWrap, InputWrap, IconButton, TopnavInput } from './HeadStyle'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import React, { useState } from 'react';
import ModalContainer from '../member/ModalContainer'; // 모달 불러오기

const StyledIcon = styled(FontAwesomeIcon)`
    color: var(--colors-offwhite);
    padding-right: 6px;
`

const TopNav = () => {
    //모달 열고 닫는 함수 3개
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };

    return (
        <>
        <ModalContainer isOpen={modalIsOpen} onRequestClose={closeModal} />
            <TopnavTemplate>
                <Link to = '/'>
                    <LogoWrap>
                        <img src={owltime} alt='owl logo'/>
                    </LogoWrap>
                </Link>
                <InputWrap>
                    <TopnavInput
                    type='text'
                    placeholder='What are you looking for?'
                    ></TopnavInput>
                </InputWrap>
                    <IconButton>
                        <Link to = '/login'><StyledIcon icon={faArrowRightToBracket} /></Link>
                    </IconButton>
                    <IconButton>
                        <Link to = '/signup'><StyledIcon icon={faUserPlus} /></Link>
                    </IconButton>
                    <IconButton onClick={openModal}>
                    <StyledIcon icon={faCircleQuestion} />
                    </IconButton>
            </TopnavTemplate>
        </>


    )
}

export default TopNav;