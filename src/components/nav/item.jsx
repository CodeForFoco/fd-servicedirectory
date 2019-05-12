import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "~/components/icon";

const Link = styled(NavLink)({
  textAlign: "center",
  width: "80px",
  color: "#565C65",
  textDecoration: "none",
  "&.isActive": {
    ".icon": { color: "#064B8D" },
    ".label": { color: "#1B1B1B" },
  },
});

const StyledIcon = styled(Icon)({
  color: "#696C72",
  margin: "0 auto 8px auto",
});

const Label = styled.span({
  fontSize: "0.875rem",
});

const Item = ({ children, icon, to }) => {
  return (
    <Link to={to} activeClassName="isActive">
      <StyledIcon className="icon" icon={icon} size={24} />
      <Label className="label">{children}</Label>
    </Link>
  );
};

export default Item;
