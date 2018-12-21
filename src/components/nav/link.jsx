import React from "react";
import { Link } from "@reach/router";

let NavLink = ({ className, ...props }) => {
  // Checks whether or not the link is active and appends an isActive prop
  const isActive = ({ isCurrent }) =>
    isCurrent ? { className: `${className} isActive` } : null;

  return <Link className={className} getProps={isActive} {...props} />;
};

export default NavLink;
