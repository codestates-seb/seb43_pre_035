import styled from "styled-components";

const SideNavContainer = styled.div`
  width: 200px;
  flex-shrink: 0;
`


const SideNavStickyContainer = styled.div`
    position: sticky;
    position: -webkit-sticky;
    top: 173px;
    width: auto;
    height: 25vh;
    min-height: 200px;
    background-color: #4F3F48;
    border-radius: 2px;
    padding: 10px;
    box-sizing: border-box;
    overflow: auto;
`;

const SideNavItem = styled.div`
    display: block;
    padding: 8px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.5rem;

  &:hover {
    font-weight: bold;
  }
`;

const SideNav = ({toggleLogin}) => {
  return (
    <SideNavContainer>
      <SideNavStickyContainer>
        <SideNavItem>Home</SideNavItem>
        <SideNavItem>Public</SideNavItem>
        <SideNavItem>Tags</SideNavItem>
        <button onClick={toggleLogin}>Login Toggle</button>
      </SideNavStickyContainer>
    </SideNavContainer>
  );
};



export default SideNav;
