import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "~/components/box";
import PhysicalInfo from "~/components/physical-info";
import Requirements from "~/components/requirements";
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

const ServiceCard = ({ link, service }) => (
  <StyledLink to={link}>
    <Container as="li">
      <Title>{service.title}</Title>
      <Description>{service.description}</Description>
      <PhysicalInfo address={service.address} hours={service.hours} />
      <Requirements
        isCompact
        requirements={service.requirements}
        populations={service.populations}
      />
    </Container>
  </StyledLink>
);

export default ServiceCard;
