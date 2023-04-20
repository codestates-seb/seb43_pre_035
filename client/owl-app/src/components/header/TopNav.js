import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';
import { FaUserPlus } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import owltime  from './owltime.png';
import {TopnavTemplate,LogoWrap,InputWrap,IconButton,TopnavInput} from './HeadStyle'


const TopNav = () => {
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
                        <Link to = '/login'><BiLogInCircle /></Link>
                    </IconButton>
                    <IconButton>
                        <Link to = '/signup'><FaUserPlus /></Link>
                    </IconButton>
                    <IconButton>
                        <AiOutlineQuestionCircle />
                    </IconButton>
            </TopnavTemplate>
        </>


    )
}

export default TopNav;