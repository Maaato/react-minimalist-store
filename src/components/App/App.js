import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { Header, Footer } from "../../components";
import { MainPage } from "../../pages";

export const App = () => (
  <BrowserRouter>
    <div className="wrapper">
      <Header />
      <MainPage />
      <Footer />
    </div>
  </BrowserRouter>
);
