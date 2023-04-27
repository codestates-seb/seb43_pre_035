import { Link } from 'react-router-dom';
import styled from 'styled-components';
import owltime  from './logo_pink.png';
import {TopnavTemplate,LogoWrap,InputWrap,IconButton,TopnavInput} from './HeadStyle'
// import { useUserState, useUserDispatch } from '../member/UserContext'; //토큰 상태 불러오기

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

import { useContext } from 'react';
import { UserContext } from '../../utils/UserContextConfig';


const StyledIcon = styled(FontAwesomeIcon)`
    color: var(--colors-offwhite);
    padding-right: 6px;
`

const TopNavlogged = ({toggleLogin, openModal }) => {

    const { handleUserLogout } = useContext(UserContext);

    return (
        <>
            <TopnavTemplate>
                <Link to = '/'>
                    <LogoWrap>
                        <img src={owltime} alt='logo image'/>
                    </LogoWrap>
                </Link>
                <InputWrap>
                    <TopnavInput
                    type='text'
                    placeholder='Search'
                    ></TopnavInput>
                </InputWrap>
                    <IconButton>
                        <Link to = '/mypage'><StyledIcon icon={faCircleUser} /></Link>
                    </IconButton>
                    <IconButton onClick={handleUserLogout}>
                        <Link to = '/'><StyledIcon icon={faArrowRightFromBracket} /></Link>
                    </IconButton>
                    <IconButton >
                        <StyledIcon icon={faCircleQuestion} onClick={openModal}/>
                    </IconButton>
            </TopnavTemplate>
        </>


    )
}

export default TopNavlogged;