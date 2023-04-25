import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import owltime  from './logo_pink.png';
import {TopnavTemplate,LogoWrap,InputWrap,IconButton,TopnavInput} from './HeadStyle'
import { useUserState, useUserDispatch } from '../member/UserContext'; //토큰 상태 불러오기

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';


const StyledIcon = styled(FontAwesomeIcon)`
    color: var(--colors-offwhite);
    padding-right: 6px;
`


const TopNavlogged = ({toggleLogin, openModal }) => {

    //     //여기서부터 로그아웃 버튼구현
    //     const { user } = useUserState();
    //     const dispatch = useUserDispatch();
      
    //     const handleLogout = () => {
    //       // 로컬 스토리지에서 토큰 제거
    //       localStorage.removeItem('token');
      
    //       // 전역 상태에서 사용자 정보 제거
    //       dispatch({ type: 'LOGOUT' });
    //     };
      
    //     if (!user) {
    //       return null;
    //     }
    //    버튼에 onClick={handleLogout} 입력하면 구현인데 충돌남...
    //여기까지 로그아웃 버튼 기능 구현
    //null 대신 유저

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
                    <IconButton >
                        <StyledIcon icon={faCircleQuestion} onClick={openModal}/>
                    </IconButton>
            </TopnavTemplate>
        </>


    )
}

export default TopNavlogged;