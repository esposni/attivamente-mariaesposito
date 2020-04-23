/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
// import NucleoIcons from "views/NucleoIcons.js";
// import LoginPage from "views/examples/LoginPage.js";
import ProfilePage from "views/pages/ProfilePage.js";
import AttivitaAdulti from "views/pages/AttivitaAdulti.js";
import AttivitaInfanzia from "views/pages/AttivitaInfanzia";
import AttivitaApprendimento from "views/pages/AttivitaApprendimento";
import AttivitaDSA from "views/pages/AttivitaDSA";



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={props => <Index {...props} />} />
     
         <Route
          path="/attivita-adulti"
          render={props => <AttivitaAdulti {...props} />}
        />
        <Route
          path="/attivita-infanzia"
          render={props => <AttivitaInfanzia {...props} />}
        />
        <Route
          path="/attivita-apprendimento"
          render={props => <AttivitaApprendimento {...props} />}
        />
        <Route
          path="/attivita-dsa"
          render={props => <AttivitaDSA {...props} />}
        />

   
        <Route
          path="/profile-page"
          render={props => <ProfilePage {...props} />}
        />
        {/* <Route path="/login-page" render={props => <LoginPage {...props} />} /> */}
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
