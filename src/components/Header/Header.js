import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const routes = [
  { path: "/", name: "Home" },
  { path: "/catalog/category/men", name: "Men's" },
  { path: "/catalog/category/woman", name: "Women's" },
  { path: "/contact", name: "Contact Us" },
];

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggle = () => {
    if (windowWidth < 768) {
      document.querySelector(".menu").classList.toggle("open");
    }
  };

  const MenuButton = () => (
    <button className="menuBtn" onClick={toggle}>
      MENU
    </button>
  );

  const Menu = () => (
    <>
      {windowWidth < 768 ? <MenuButton /> : ""}
      <div className="menu">
        {routes.map(({ path, name }, i) => (
          <NavLink
            key={i}
            to={path}
            exact
            activeClassName="activeNavLink"
            className="navLink"
            onClick={toggle}
          >
            {name}
          </NavLink>
        ))}
      </div>
    </>
  );

  return (
    <header className="header">
      <h1>
        <NavLink to="/" exact className="logo">
          Store
        </NavLink>
      </h1>
      <Menu />
    </header>
  );
};
