import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { initializeStore } from "~core/store/store";
import Nav from "~/components/nav";
import theme from "~/core/theme";
import Categories from "~/pages/categories";
import Help from "~/pages/help";
import Search from "~/pages/search";
import Services from "~/pages/services";
import ServiceDetail from "~/pages/service-detail";
import Types from "~/pages/types";

const GlobalStyles = createGlobalStyle`
	body {
		background: #F8F9FB;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
	}
`;

const PageContainer = styled.div({
  marginBottom: "96px",
});

// Initialize Redux store
const store = initializeStore();

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Normalize />
      <GlobalStyles />
      <PageContainer>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/categories" />} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/categories/:categoryId" component={Types} />
          <Route
            exact
            path="/categories/:categoryId/:typeId"
            component={Services}
          />
          <Route
            exact
            path="/categories/:categoryId/:typeId/:serviceId"
            component={ServiceDetail}
          />
          <Route exact path="/help" component={Help} />
        </Switch>
      </PageContainer>
      <Nav />
    </BrowserRouter>
  </ThemeProvider>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
