import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "~/core/theme";

const MockApp = ({ children }) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>{children}</BrowserRouter>
  </ThemeProvider>
);

export default MockApp;
