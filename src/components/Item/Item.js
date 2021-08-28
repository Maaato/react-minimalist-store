import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Skeleton from "react-loading-skeleton";

import "./Item.css";

export const Item = (product) => {
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const handleItem = () => history.push(`/item/${product.id}`);

  const handleLoadImg = () => setLoading(!loading);

  return (
    <div className="item">
      <div className="content" onClick={handleItem}>
        <figure>
          <Skeleton
            width="100%"
            height="16rem"
            style={{
              objectFit: "containt",
              display: loading ? "block" : "none",
            }}
          />
          <img
            loading="lazy"
            src={product.image}
            alt={product.title}
            className="contentImg"
            onLoad={handleLoadImg}
          />
          <figcaption style={{ display: loading ? "block" : "none" }}>
            <Skeleton count={2} className="marT10" />
          </figcaption>
          <figcaption style={{ display: !loading ? "block" : "none" }}>
            <h5 className="text-center frm">{product.title}</h5>
            <h5 className="text-center frm">${product.price}</h5>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};
