import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import owltime  from './owltime.png'
import {TopnavTemplate,LogoWrap,InputWrap,IconButton,TopnavInput} from './HeadStyle'
import { useUserState, useUserDispatch } from '../UserContext'; //토큰 상태 불러오기




const TopNavlogged = () => {
    //여기서부터 로그아웃 버튼구현
    const { user } = useUserState();
    const dispatch = useUserDispatch();
  
    const handleLogout = () => {
      // 로컬 스토리지에서 토큰 제거
      localStorage.removeItem('token');
  
      // 전역 상태에서 사용자 정보 제거
      dispatch({ type: 'LOGOUT' });
    };
  
    if (!user) {
      return null;
    }
   //여기까지 로그아웃 버튼 기능 구현
    return (
        <>
            <TopnavTemplate>
                <Link to = '/'>
                    <LogoWrap>
                        <img src={owltime} alt='logo image'/>
                    </LogoWrap>
                </Link>
                <InputWrap>
                    <AiOutlineSearch />
                    <TopnavInput 
                    type='text'
                    placeholder='         Search'
                    ></TopnavInput>
                </InputWrap>
                    <IconButton>
                        <Link to = '/login'><FaRegUserCircle /></Link>
                    </IconButton>
                    <IconButton>
                        <Link to = '/signup'><MdLogout onClick={handleLogout}/></Link>
                    </IconButton>
                    <IconButton>
                        <AiOutlineQuestionCircle />
                    </IconButton>
            </TopnavTemplate>
        </>


    )
}

export default TopNavlogged;