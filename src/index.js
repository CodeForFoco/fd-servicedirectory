import React from "react";
import { render } from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import Categories from "./pages/categories";
import ServiceTypes from "./pages/service-types";
import Services from "./pages/services";
import ServiceDetail from "./pages/service-detail";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/nav";

const GlobalStyle = createGlobalStyle({
  html: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    boxSizing: "border-box",
  },
});

const Container = styled.main({});

const PageWrapper = styled.article({});

const App = () => (
  <h1>
    <BrowserRouter>
      <Container>
        <PageWrapper>
          <GlobalStyle />
          <Route exact path="/" component={Categories} />
          <Route exact path="/:categoryId" component={ServiceTypes} />
          <Route exact path="/:categoryId/:typeId" component={Services} />
          <Route
            exact
            path="/:categoryId/:typeId/:serviceId"
            component={ServiceDetail}
          />
        </PageWrapper>
        <Navigation />
      </Container>
    </BrowserRouter>
  </h1>
);

render(<App />, document.getElementById("root"));
