import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import Nav from "./components/nav";
import Categories from "./pages/categories";
import Help from "./pages/help";
import Search from "./pages/search";

const GlobalStyles = createGlobalStyle`
	body {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif
	}
`;

const Layout = styled.div({
  background: "#F8F9FB",
  display: "grid",
  grid: `
    "page" 1fr
    "nav" 80px
	`,
  height: "100vh",
});

const PageWrapper = styled.article({
  gridArea: "page",
});

const App = () => (
  <BrowserRouter>
    <Layout>
      <Normalize />
      <GlobalStyles />
      <PageWrapper>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/categories" />} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/help" component={Help} />
        </Switch>
      </PageWrapper>
      <Nav />
    </Layout>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));
