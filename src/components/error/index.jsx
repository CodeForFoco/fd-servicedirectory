import React from "react";
import styled from "styled-components";
import { P1 } from "~/components/typography";

const Container = styled.div({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "96px 0",
});

const Error = ({ errorMessage }) => (
  <Container>
    <P1>{errorMessage}</P1>
  </Container>
);

export default Error;
