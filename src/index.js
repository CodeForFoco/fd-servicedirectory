import React from "react";
import { render } from "react-dom";
import Categories from "./pages/categories";
import ServiceTypes from "./pages/service-types";
import Services from "./pages/services";
import ServiceDetail from "./pages/service-detail";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <main>
      <Route exact path="/" component={Categories} />
      <Route exact path="/:categoryId" component={ServiceTypes} />
      <Route exact path="/:categoryId/:typeId" component={Services} />
      <Route
        exact
        path="/:categoryId/:typeId/:serviceId"
        component={ServiceDetail}
      />
    </main>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
