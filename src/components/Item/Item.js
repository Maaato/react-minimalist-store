import React from "react";
import { useHistory } from "react-router";

import "./Item.css";

export const Item = (props) => {
  const history = useHistory();

  const handleItem = () => history.push(`/item/${props.id}`);

  return (
    <div className="item">
      <div className="content" onClick={handleItem} />
    </div>
  );
};
