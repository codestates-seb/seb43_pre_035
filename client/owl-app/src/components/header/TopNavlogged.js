import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import owltime  from './owltime.png'
import {TopnavTemplate,LogoWrap,InputWrap,IconButton,TopnavInput} from './HeadStyle'




const TopNavlogged = () => {
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
                        <Link to = '/signup'><MdLogout /></Link>
                    </IconButton>
                    <IconButton>
                        <AiOutlineQuestionCircle />
                    </IconButton>
            </TopnavTemplate>
        </>


    )
}

export default TopNavlogged;