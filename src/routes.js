import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import OAservice from "./containers/Base/OAservice/main";
import About from "./containers/Base/About/main";
import AFservice from "./containers/Base/AFservice/main";

const BaseRouter = () => (
  <div>
    <Switch>
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route path="/about" render={props => <About {...props} />} />
      <Route
        path="/servizi/openappalti"
        render={props => <OAservice {...props} />}
      />
      <Route
        path="/servizi/albofornitori"
        render={props => <AFservice {...props} />}
      />
    </Switch>
  </div>
);

export default BaseRouter;
