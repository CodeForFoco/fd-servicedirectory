import React from "react";
import Item from "./item";

const Nav = () => {
  return (
    <nav>
      <Item icon="search">Search</Item>
      <Item icon="cross">Home</Item>
      <Item icon="help">Help</Item>
    </nav>
  );
};

export default Nav;
