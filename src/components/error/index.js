import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { DEFAULT_ERROR_MESSAGE } from "~/core/api";
import { P1 } from "~/components/typography";
import Button from "~/components/button";

const reportEmail = process.env.SUPPORT_EMAIL_ADDRESS;

const Container = styled.div({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "96px 0",
});

const ReportLink = styled.a({
  textDecoration: "none",
  marginTop: rem("22px"),
});

const ReportButton = styled(Button)({
  cursor: "pointer",
});

const Error = ({ errorMessage }) => (
  <Container>
    <P1>{errorMessage}</P1>
    {reportEmail && errorMessage !== DEFAULT_ERROR_MESSAGE && (
      <ReportLink
        target="_blank"
        href={`mailto:${reportEmail}?subject=${errorMessage}&body=${errorMessage}`}
      >
        <ReportButton>Report this issue to the developers</ReportButton>
      </ReportLink>
    )}
  </Container>
);

export default Error;
