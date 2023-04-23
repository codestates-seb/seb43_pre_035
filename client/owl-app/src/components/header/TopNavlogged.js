import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import owltime  from './logo_pink.png';
import {TopnavTemplate,LogoWrap,InputWrap,IconButton,TopnavInput} from './HeadStyle'
import { useUserState, useUserDispatch } from '../UserContext'; //토큰 상태 불러오기

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

const StyledIcon = styled(FontAwesomeIcon)`
    color: var(--colors-offwhite);
    padding-right: 6px;
`


const TopNavlogged = ({toggleLogin}) => {
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
                    <IconButton onClick={toggleLogin}>
                        <Link to = '/'><StyledIcon icon={faArrowRightFromBracket} /></Link>
                    </IconButton>
                    <IconButton>
                        <StyledIcon icon={faCircleQuestion} />
                    </IconButton>
            </TopnavTemplate>
        </>


    )
}

export default TopNavlogged;