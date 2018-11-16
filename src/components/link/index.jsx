import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const StyledLink = styled.a({});

const StyledRouterLink = styled(RouterLink)({});

const Link = ({ children, to, className, newTab, ...props }) => {
  //  Assume that all links starting with "/" are internal
  const isInternal = /^\/(?!\/)/.test(to);

  // Use React Router Link for internal links, and <a> for others
  if (isInternal) {
    return (
      <StyledRouterLink className={className} to={to}>
        {children}
      </StyledRouterLink>
    );
  }

  // Support opening external links in a new tab
  const linkProps = {
    ...props,
    ...(newTab && { rel: "noopener noreferrer", target: "_blank" }),
  };

  return (
    <StyledLink className={className} href={to} {...linkProps}>
      {children}
    </StyledLink>
  );
};

export default Link;
