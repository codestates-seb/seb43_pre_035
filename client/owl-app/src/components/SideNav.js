import styled from "styled-components";
import { useState,useEffect } from 'react';

const SideNavContainer = styled.aside`
  ${'' /* width: 200px; */}
  display: flex;
  justify-content: flex-start;
  ${'' /* flex: 1 0 25%; */}
  width: var(--size-sidenav-container);
  margin-right: var(--spacing-sidenav-right);
  ${'' /* overflow-x: visible; */}
  ${'' /* overflow-y: hidden; */}

`

const SideNavStickyContainer = styled.div`
    position: sticky;
    position: -webkit-sticky;
    top: var(--spacing-sidenav-top);
    left: 0;
    width: 100%;
    height: 25vh;
    min-height: 200px;
    border-radius: 2px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding: 10px 40px 10px 10px;
    overflow-x: visible;
    overflow-y: hidden;
`;

const SideNavItem = styled.div`
    display: block;
    min-width: var(--size-sidenavitem-minwidth);
    padding: 3px 10px 3px 20px;
    margin-bottom: 10px;
    color: var(--colors-text-default);
    text-decoration: none;
    font-family: 'Atomic Age';
    text-transform: uppercase;
    font-size: 1.25rem;
    cursor: pointer;

  &:hover {
    font-weight: bold;

  }

  &.selected {
    padding-left: 20px;
    background: var(--colors-green);
    border-radius: 20px;
  }

  &.top {
    margin-top: 30px;
  }

`;

const LoginCheckBtn = styled.button`
    display: flex;
    align-self: center;
    outline: none;
    color: var(--colors-text-default);
    background: var(--colors-green);
    border-radius: 25px;
    border: 1px solid transparent;
    padding: 5px 10px;
    margin-top: 35px;
    opacity: 50%;
    max-width: 100px;


    &:hover {
      opacity: 100%;
    }
`

const SideNav = ({toggleLogin, sidebarStatus, isLoggedIn, clickSidebarHandler}) => {

  const [logState, setLogState] = useState(isLoggedIn ? "LOGOUT" : "LOGIN");

  const logHandler = () => {
    toggleLogin();
    if(logState === 'LOGIN') setLogState('LOGOUT');
    else setLogState('LOGIN');
  }

  useEffect(()=> {
    // console.log('useEffect! sidenav text change');
    setLogState(isLoggedIn ? "LOGOUT" : "LOGIN");
  }, [isLoggedIn]);

  return (
    <SideNavContainer>
      <SideNavStickyContainer>
        <SideNavItem className={`top ${sidebarStatus.homeOn ? 'selected' : ''}`}
                      onClick={()=>{clickSidebarHandler('Home')}}>Home</SideNavItem>
        <SideNavItem className={sidebarStatus.tagsOn ? 'selected' : ''}
                      onClick={()=>{clickSidebarHandler('Tags')}}>Tags</SideNavItem>
        <SideNavItem className={sidebarStatus.usersOn ? 'selected' : ''}
                      onClick={()=>{clickSidebarHandler('Users')}}>Users</SideNavItem>
        <LoginCheckBtn onClick={logHandler}>{logState}</LoginCheckBtn>
      </SideNavStickyContainer>
    </SideNavContainer>
  );
}; 



export default SideNav;