import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { Header } from "../../components";

export const App = () => (
  <BrowserRouter>
    <div className="wrapper">
      <Header />
    </div>
  </BrowserRouter>
);
