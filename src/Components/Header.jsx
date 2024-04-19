import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="w-full  bg-richblack-800 flex items-center justify-center sticky z-50 top-0 scroll">
      <NavLink to="/">
        <div
          onClick={() => window.scroll(0, 0)}
          className=" letter tracking-[0.2rem] text-xl md:text-3xl font-bold py-2 md:py-2 text-richblack-5"
        >
          CineView🍿📺
        </div>
      </NavLink>
      <div className="ml-3 flex sm:absolute sm:right-5 gap-2 ">
        <NavLink to="/login">
          <div>
            <button className="bg-richblack-200 hover:scale-105 transition-all duration-200 ease-out  hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] font-semibold text-[10px] sm:text-base text-richblack-800 py-[8px] px-[12px] rounded-full border-richblack-800">
              Login
            </button>
          </div>
        </NavLink>
        <NavLink to="/signup">
          <div>
            <button className="bg-richblack-200 hover:scale-105  transition-all duration-200 ease-out hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] font-semibold text-[10px] sm:text-base text-richblack-800 py-[8px] px-[12px] rounded-full border-richblack-800">
              Signup
            </button>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
