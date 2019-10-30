import React, { Fragment } from "react";
import styled from "styled-components";
import { H1 } from "~/components/typography";
import Logo from "~/components/logo";

const HelpContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 16px",
});

const StyledLogo = styled(Logo)({
  margin: "48px auto",
});

const IntroText = styled(H1)({
  color: "#44474F",
  padding: "0 32px",
  textAlign: "center",
});

const Li = styled.li({
  textDecoration: "none",
});

const Help = () => {
  return (
    <Fragment>
      <StyledLogo />
      <IntroText>Pick an option for Help.</IntroText>
      <HelpContainer>
        <h2>Common Issues:</h2>
        <p>In the event of an emergency, call 911.</p>
        <ul>
          <Li>
            <p>
              <b>Service or Organization Infomation was incorrect.</b>
            </p>
            <p>
              Contact the Poudre Fire Authority to request updating information
              for a service or organization.
            </p>
          </Li>
          <Li>
            <p>
              <b>I can&apos;t find a service or organization.</b>
            </p>
            <p>
              Try looking for the service or organization on the{" "}
              <a href="/categories">Home</a> or <a href="/search">Search</a>{" "}
              page. If you&apos;d like to add a service or organization, see the
              issue below.
            </p>
          </Li>
          <Li>
            <p>
              <b>How do I add a new Service or Organization?</b>
            </p>
            <p>
              Contact the Poudre Fire Authority to request adding a new service
              or organization.
            </p>
          </Li>
          <Li>
            <p>
              <b>How do I report an issue?</b>
            </p>
            <p>
              Contact the Poudre Fire Authority regarding any issues you find.
            </p>
          </Li>
          <Li>
            <p>
              <b>How do I request a feature?</b>
            </p>
            <p>
              Contact the Poudre Fire Authority regarding any feature requests.
            </p>
          </Li>
        </ul>
        <br />
        <p>
          To reach someone at PFA during business hours, 8 a.m. to 5 p.m. Monday
          through Friday, you may contact:
        </p>
        <p>
          PFA&apos;s Administrative offices:&nbsp;
          <a href="tel:970-416-2892">970-416-2892</a>
        </p>
      </HelpContainer>
    </Fragment>
  );
};

export default Help;
