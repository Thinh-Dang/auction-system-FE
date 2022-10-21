import React from "react";
import { Link } from "react-router-dom";


const NavItem = ( {href, content, active, classes }: INavItemProps) => {
  return (
    <li className={`${classes} ${active && "active"}`}>
      <Link to={href}>{content}</Link>
    </li>
  );
};

export default NavItem;
