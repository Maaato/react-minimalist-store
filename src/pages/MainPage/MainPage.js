import React, { useState, useEffect } from "react";
import { Item } from "../../components";
import { getAllProducts } from "../../services";

import "./MainPage.css";

export const MainPage = ({ products }) => {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const resProducts = await getAllProducts();
      setListProducts(resProducts);
    };
    products ? setListProducts(products) : fetchProducts();
  }, [products]);

  return (
    <main className="main">
      {listProducts.map((e) => (
        <Item key={e.id} {...e} />
      ))}
    </main>
  );
};
