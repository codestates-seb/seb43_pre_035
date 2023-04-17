import React from "react";
import styled from "styled-components";

const SideNav = () => {
  return (
    <SideNavContainer>
      <SideNavItem>Home</SideNavItem>
      <SideNavItem>Public</SideNavItem>
      <SideNavItem>Tags</SideNavItem>
    </SideNavContainer>
  );
};

const SideNavContainer = styled.div`
  background-color: #f2f2f2;
  height: 100%;
  width: 200px;
  position: fixed;
  left: 0;
  top: 0;
`;

const SideNavItem = styled.div`
   font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

export default SideNav;