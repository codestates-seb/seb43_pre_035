import styled from "styled-components";
import TopNav from "./TopNav";
import TopNavlogged from "./TopNavlogged";
import { useState } from 'react'

const HeaderBlock = styled.header`
    display: flex;
    justify-content: center;
    position: fixed;
    top : 0;
    left : 0;
    width: 100%;
    height: 135px;
    z-index: 1000;
    background: linear-gradient(45deg, #9D5353, #4F3F48);
`

const HeaderWrap = styled.div`
    width: 100%;
    height: 100%;
`

const Header = ()=>{

    const [nav,setLogednav] = useState(false)

    const handleClicknav = () => {
      setLogednav(!nav)
    } 
    
    return(
        <HeaderBlock>
            <HeaderWrap >
                <TopNav />
            </HeaderWrap>
        </HeaderBlock>
 )
}

export default Header