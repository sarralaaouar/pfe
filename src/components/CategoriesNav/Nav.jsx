import { Segmented } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  const history = useHistory();
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  const onclick = (link) => {
    history.push(link);
  };
  return (
    <Segmented
      className="seg"
      block
      options={[
        {
          label: "All Products",
          value: "products",
        },
        {
          label: "Mugs",
          value: "mugs",
        },
        {
          label: "Soin",
          value: "soin",
        },
        {
          label: "Peluche",
          value: "peluche",
        },
      ]}
      onChange={(e) => {
        onclick(e);
      }}
      defaultValue={null}
    />
  );
};
export default Nav;
