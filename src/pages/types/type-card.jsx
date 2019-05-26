import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "~/components/box";
import { B1, P2 } from "~/components/typography";

const StyledLink = styled(Link)({
  textDecoration: "none",
});

const Container = styled(Box)({
  marginBottom: "16px",
});

const Title = styled(B1)({
  color: "#1B1B1B",
  display: "block",
  marginBottom: "4px",
});

const Description = styled(P2)({
  color: "#696C72",
});

const TypeCard = ({ description, link, title }) => (
  <StyledLink to={link}>
    <Container as="li">
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  </StyledLink>
);

export default TypeCard;
