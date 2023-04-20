import styled from "styled-components";


const SideNavContainer = styled.aside`
  ${'' /* width: 200px; */}
  display: flex;
  justify-content: flex-start;
  ${'' /* flex: 1 0 25%; */}
  width: var(--size-sidenav-container);
  margin-right: var(--spacing-sidenav-right);

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
    margin-top: 30px;
    padding-left: 20px;
    background: var(--colors-green);
    border-radius: 20px;
  }

`;

const LoginCheckBtn = styled.button`
    outline: none;
    color: var(--colors-text-default);
    background: var(--colors-green);
    border-radius: 10px;
    border: 1px solid transparent;
    padding: 5px;
    margin-top: 50px;
    opacity: 30%;
    max-width: 100px;
`

const SideNav = ({toggleLogin, clickHomeHandler, clickTagsHandler, clickUsersHandler}) => {

  return (
    <SideNavContainer>
      <SideNavStickyContainer>
        <SideNavItem className="selected" onClick={clickHomeHandler}>Home</SideNavItem>
        <SideNavItem onClick={clickTagsHandler}>Tags</SideNavItem>
        <SideNavItem onClick={clickUsersHandler}>Users</SideNavItem>
        <LoginCheckBtn onClick={toggleLogin}>Login Toggle </LoginCheckBtn>
      </SideNavStickyContainer>
    </SideNavContainer>
  );
};



export default SideNav;