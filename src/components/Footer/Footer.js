import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="has-link">
        <Link to="/">
          &copy; {new Date().getFullYear()} | Store All Rights Reserved.
        </Link>
      </p>
    </footer>
  );
};
