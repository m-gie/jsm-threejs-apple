import React from "react";
import { appleImg, searchImg, bagImg } from "../utils";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt="apple" width={18} height={18} />
        <div>
          {["Phones", "MacBooks", "Tables"].map((item, index) => (
            <div key={nav}>{item}</div>
          ))}
        </div>
        <div>
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
