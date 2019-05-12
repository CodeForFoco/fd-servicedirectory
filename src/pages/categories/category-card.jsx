import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "~/components/box";
import { B1, P2 } from "~/components/typography";

const StyledLink = styled(Link)({
  textDecoration: "none",
});

const Title = styled(B1)({
  color: "#000",
  display: "block",
});

const Description = styled(P2)({
  color: "#696C72",
});

const CategoryCard = ({ description, link, title }) => (
  <StyledLink to={`/categories/${link}`}>
    <Box as="li">
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Box>
  </StyledLink>
);

export default CategoryCard;
