import React from "react";
import { render } from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import Categories from "./pages/categories";
import ServiceTypes from "./pages/service-types";
import Services from "./pages/services";
import ServiceDetail from "./pages/service-detail";
import { Router } from "@reach/router";
import Navigation from "./components/nav";

const Normalize = createGlobalStyle`${normalize()}`;

const GlobalStyle = createGlobalStyle({
  html: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    boxSizing: "border-box",
  },
  "*, *:before, *:after": {
    boxSizing: "inherit",
  },
  a: {
    textDecoration: "none",
  },
});

const Container = styled.main({
  background: "#fff",
  display: "grid",
  grid: `
		"content" 1fr
		"navigation" auto
	`,
  height: "100vh",
});

const PageWrapper = styled.article({
  gridArea: "content",
  margin: "0.5rem",
});

const NavigationWrapper = styled(Navigation)({
  gridArea: "navigation",
});

const App = () => (
  <Container>
    <GlobalStyle />
    <Normalize />
    <PageWrapper>
      <Router>
        <Categories path="/" />
        <ServiceTypes path="/:categoryId" />
        <Services path="/:categoryId/:typeId" />
        <ServiceDetail path="/:categoryId/:typeId/:serviceId" />
      </Router>
    </PageWrapper>
    <NavigationWrapper />
  </Container>
);

render(<App />, document.getElementById("root"));
