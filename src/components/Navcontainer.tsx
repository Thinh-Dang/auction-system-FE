import React from "react";
import APP_PATH from "../constant/APP_PATH";

const Navcontainer = () => {
  return (
    <nav className="navContainer">
      <ul className="flex gap-[6rem]">
        <li className="navItem ">
          <a href={APP_PATH.ROOT.href}>Home</a>
        </li>
        <li className="navItem ">
          <a href={APP_PATH.PRODUCTS.href}>Collections</a>
        </li>
        <li className="navItem ">
          <a href={APP_PATH.SELLPRODUCT.href}>Sell An Antique</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navcontainer;
