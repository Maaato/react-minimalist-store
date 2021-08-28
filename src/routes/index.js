import React, { useState, useEffect } from "react";
import { MainPage } from "../pages";
import { Switch, Route } from "react-router";
import { getAllProducts } from "../services";

const routes = [{ path: "/", Component: MainPage }];

export const RouteHandler = () => {
  const [products, setProducts] = useState([]);
  console.log({ products });

  useEffect(() => {
    const fetchProducts = async () => {
      const resProducts = await getAllProducts();
      setProducts(resProducts);
    };
    fetchProducts();
  }, []);

  return (
    <Switch>
      {routes.map(({ path, Component }) => (
        <Route exact key={path} path={path}>
          <Component path={path} products={products} />
        </Route>
      ))}
    </Switch>
  );
};
