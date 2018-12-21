import React from "react";
import styled from "styled-components";
import NavLink from "./link";
import Icon from "../icon";

const StyledLink = styled(NavLink)({
  color: "#a5b1c2",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  "&.isActive": {
    color: "#3867d6",
  },
});

const Text = styled.span({
  fontSize: "0.8rem",
  fontWeight: 700,
  marginTop: "0.25rem",
  textTransform: "uppercase",
});

const StyledIcon = styled(Icon)({});

const NavItem = ({ icon, label, to }) => (
  <StyledLink to={to}>
    <StyledIcon icon={icon} />
    <Text>{label}</Text>
  </StyledLink>
);

export default NavItem;
