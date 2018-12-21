import React from "react";
import styled from "styled-components";
import Item from "./item";

const StyledNav = styled.nav({
  alignItems: "center",
  justifyContent: "space-between",
  background: "#F6F7F8",
  borderTop: "1px solid #ECEEF5",
  display: "flex",
  height: "4.5rem",
  padding: "0 3rem",
});

const Navigation = ({ className }) => {
  return (
    <StyledNav className={className}>
      <Item icon="magnifying-glass" label="Search" to="/search" />
      <Item icon="house" label="Home" to="/" />
      <Item icon="question" label="Help" to="/help" />
    </StyledNav>
  );
};

export default Navigation;
