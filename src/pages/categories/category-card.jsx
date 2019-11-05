import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "~/components/box";
import Icon from "~/components/icon";
import { B1, P2 } from "~/components/typography";
import { getLightVariant } from "~/core/theme";

const StyledLink = styled(Link)({
  display: "block",
  textDecoration: "none",
  marginBottom: "16px",
});

const Container = styled(Box)({
  alignItems: "center",
  display: "flex",
});

const StyledIcon = styled(Icon)(({ color, theme }) => ({
  color: theme.colors[color],
}));

const IconBackground = styled.figure(({ color, theme }) => ({
  alignItems: "center",
  background: theme.colors[getLightVariant(color)],
  borderRadius: "48px",
  display: "flex",
  flexShrink: 0,
  height: "48px",
  justifyContent: "center",
  margin: "0 16px 0 0",
  width: "48px",
}));

const Title = styled(B1)({
  color: "#1B1B1B",
  display: "block",
  marginBottom: "4px",
});

const Description = styled(P2)({
  color: "#696C72",
});

const CategoryCard = ({ color, description, icon, slug, title }) => (
  <StyledLink to={`/categories/${slug}`}>
    <Container as="li">
      <IconBackground color={color}>
        <StyledIcon color={color} icon={icon} />
      </IconBackground>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </Container>
  </StyledLink>
);

export default CategoryCard;
