import styled from "styled-components";

const SideNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 200px;
    left: 50px;
    width: 200px;
    height: 150px;
    background-color: #4F3F48;
    border-radius: 2px;
    padding: 10px;
    box-sizing: border-box;
    float: left;
`;

const SideNavItem = styled.div`
    display: block;
    height: 25px;
    padding: 8px;
    color: #fff;
    text-decoration: none;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

const SideNav = () => {
  return (

    <SideNavContainer>
      <SideNavItem>Home</SideNavItem>
      <SideNavItem>Public</SideNavItem>
      <SideNavItem>Tags</SideNavItem>
    </SideNavContainer>
  );
};



export default SideNav;
