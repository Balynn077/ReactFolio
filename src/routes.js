import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutWrap from "./about/aboutWrapper";
import ContactWrap from "./contact/contactWrapper";
import MainWrap from "./main";
import WorkWrap from "./work/workWrapper";
import NavbarContainer from "./navigation/navContainer";
import FooterContainer from "./footer/footerContainer";
export default function BaseRouter() {
  return (
    <BrowserRouter>
      <NavbarContainer />
      <Switch>
        <Route exact path="/" component={MainWrap} />
        <Route path="/about" component={AboutWrap} />
        <Route path="/contact" component={ContactWrap} />
        <Route path="/work" component={WorkWrap} />
      </Switch>
      <FooterContainer />
    </BrowserRouter>
  );
}
