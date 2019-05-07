import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "../icon";

const Link = styled(NavLink)({
  textAlign: "center",
  width: "72px",
  color: "#565C65",
  textDecoration: "none",
  "&.isActive": {
    background: "papayawhip",
  },
});

const StyledIcon = styled(Icon)({
  margin: "0 auto 8px auto",
});

const Label = styled.span({
  fontSize: "0.875rem",
});

const Item = ({ children, icon, to }) => {
  return (
    <Link to={to} activeClassName="isActive">
      <StyledIcon icon={icon} size={24} />
      <Label>{children}</Label>
    </Link>
  );
};

export default Item;
