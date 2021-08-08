import React from "react";
import { Item } from "../../components";

import "./MainPage.css";

export const MainPage = () => (
  <main className="main">
    {"1234567890".split("").map((e, i) => (
      <Item key={i} />
    ))}
  </main>
);
