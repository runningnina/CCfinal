import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

// import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
// import Index from "views/Index.js";

import Companies from "components/Company/Companies.js"
import Events from "components/Events/Events.js"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      {/* <Route path="/admin" component={Admin} /> */}
      <Route path="/auth" component={Auth} />
      <Route path="/companies" component={Companies} />
      <Route path="/events" exact component={Events} />
      {/* add routes without layouts */}
      <Route path="/" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
