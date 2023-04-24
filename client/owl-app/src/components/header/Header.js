import styled from "styled-components";
import TopNav from "./TopNav";
import TopNavlogged from "./TopNavlogged";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HeaderBlock = styled.header`
    display: flex;
    justify-content: center;
    position: fixed;
    top : 0;
    left : 0;
    width: 100%;
    height: 100px;
    z-index: 1000;
    background: linear-gradient(45deg, #9D5353, #4F3F48);
`

const HeaderWrap = styled.div`
    width: 100%;
    height: 100%;
`

const Header = ({threads, setSidebarStatus, isLoggedIn, toggleLogin, openModal}) => {

    const location = useLocation();


    const clickHomeHandler = () => {
        setSidebarStatus({homeOn: true, tagsOn: false, usersOn: false});
    }

    useEffect(() => {
        console.log(location);
        if (location.pathname === '/' && threads) {
            clickHomeHandler();
        }
    }, [location]);

    return(
        <HeaderBlock>
            <HeaderWrap >
                {isLoggedIn ? <TopNavlogged toggleLogin={toggleLogin} openModal={openModal}/> : <TopNav openModal={openModal}/> }
            </HeaderWrap>
        </HeaderBlock>
 )
}

export default Header