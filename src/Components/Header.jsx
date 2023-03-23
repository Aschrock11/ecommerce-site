import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className=" sticky top-0 z-50 flex justify-between items-center">
      <div className="  flex justify-center items-center sm:h-7 sm:w-10 lg:h-10 lg:w-13  ">
        <img src="./images/currentFurnishLogo.png" alt="" />
      </div>
      <div className="flex gap-3">
        <a href="">Home</a>
        <a href="">Categories</a>
        <ShoppingCartIcon className="h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
