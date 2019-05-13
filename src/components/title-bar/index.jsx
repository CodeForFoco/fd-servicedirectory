import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "~/components/icon";
import { B1 } from "~/components/typography";

const Container = styled.nav({
  alignItems: "center",
  background: "#F8F9FB",
  display: "flex",
  height: "48px",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  width: "100%",
});

const BackLink = styled(Link)({
  color: "#1B1B1B",
  left: 0,
  padding: "16px",
  position: "absolute",
});

const Title = styled(B1)({
  color: "#1B1B1B",
  margin: "auto",
});

const TitleBar = ({ className, backLink, title }) => (
  <Container className={className}>
    <BackLink to={backLink}>
      <Icon icon="arrow-left" size={16} />
    </BackLink>
    <Title>{title}</Title>
  </Container>
);

export default TitleBar;
