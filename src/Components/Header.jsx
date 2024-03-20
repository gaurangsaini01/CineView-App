import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="w-full sticky z-50 top-0 scroll" onClick={()=>window.scroll(0,0)}>
      <NavLink to="/">
        <div className="w-full  flex items-center justify-center bg-gray-400 text-2xl md:text-3xl font-bold py-2 md:py-4">
          PikaShow
        </div>
      </NavLink>
    </div>
  );
}

export default Header;
