import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { Header, Footer } from "../../components";
import { RouteHandler } from "../../routes";

export const App = () => (
  <BrowserRouter>
    <div className="wrapper">
      <Header />
      <RouteHandler />
      <Footer />
    </div>
  </BrowserRouter>
);
