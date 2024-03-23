import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="w-full sticky z-50 top-0 scroll" >
      <NavLink to="/">
        <div onClick={()=>window.scroll(0,0)} className="w-full  flex items-center justify-center letter tracking-[0.2rem] bg-richblack-800 text-2xl md:text-3xl font-bold py-2 md:py-4 text-richblack-5">
          PikaShow
        </div>
      </NavLink>
    </div>
  );
}

export default Header;
