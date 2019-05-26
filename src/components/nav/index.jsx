import React from "react";
import Item from "./item";
import styled from "styled-components";

const Container = styled.nav({
  alignItems: "center",
  background: "#FFF",
  bottom: 0,
  boxShadow: "0 4px 12px rgba(0,0,0,0.1);",
  display: "flex",
  height: "80px",
  justifyContent: "space-evenly",
  position: "fixed",
  width: "100%",
});

const Nav = () => (
  <Container>
    <Item icon="search" to="/search">
      Search
    </Item>
    <Item icon="cross" to="/categories">
      Home
    </Item>
    <Item icon="help" to="/help">
      Help
    </Item>
  </Container>
);

export default Nav;
