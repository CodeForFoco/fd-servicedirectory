import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import Nav from "./components/nav";
import theme from "./core/theme";
import Categories from "./pages/categories";
import Help from "./pages/help";
import Search from "./pages/search";
import Types from "./pages/types";

const GlobalStyles = createGlobalStyle`
	body {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif
	}
`;

const Layout = styled.div({
  background: "#F8F9FB",
  display: "grid",
  gridTemplateRows: "auto 1fr 80px",
  height: "100vh",
});

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Layout>
        <Normalize />
        <GlobalStyles />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/categories" />} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/categories/:categoryId" component={Types} />
          <Route exact path="/help" component={Help} />
        </Switch>
        <Nav />
      </Layout>
    </BrowserRouter>
  </ThemeProvider>
);

render(<App />, document.getElementById("app"));
