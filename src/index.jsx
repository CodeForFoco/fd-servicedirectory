import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/nav";
import Categories from "./pages/categories";
import Contact from "./pages/contact";
import Search from "./pages/search";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/search" component={Search} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/" component={Categories} />
    </Switch>
    <Nav />
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));
