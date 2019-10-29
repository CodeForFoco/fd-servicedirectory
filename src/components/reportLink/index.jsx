import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { DEFAULT_ERROR_MESSAGE } from "~/core/api";
import Button from "~/components/button";

const reportEmail = process.env.SUPPORT_EMAIL_ADDRESS;

const Link = styled.a({
  textDecoration: "none",
  marginTop: rem("22px"),
});

const ReportButton = styled(Button)({
  cursor: "pointer",
});

const ReportLink = ({ errorMessage }) =>
  !reportEmail || errorMessage === DEFAULT_ERROR_MESSAGE ? null : (
    <Link
      target="_blank"
      href={`mailto:${reportEmail}?subject=${errorMessage}&body=${errorMessage}`}
    >
      <ReportButton>Report this issue to the developers</ReportButton>
    </Link>
  );

export default ReportLink;
