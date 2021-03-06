import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Wizard from "./components/Wizard";
import Cards from "./components/Cards";
import Main from "./components/Main";
import Signup from "./components/Signup";
import ScrollToTop from "./components/ScrollTop";
import CreateQuote from "./components/CreateQuote";
import EditParts from "./components/EditParts";

export default (props) => (
  <HashRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/start" component={CreateQuote} />
        <Route exact path="/editparts" component={EditParts} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/wizard" component={Wizard} />
        <Route exact path="/cards" component={Cards} />
      </Switch>
    </ScrollToTop>
  </HashRouter>
);
