import React from "react";
import { FaFire } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full  sticky bottom-0 flex items-center justify-center gap-[5vw] sm:gap-[10vw] bg-gray-600 py-2 sm:py-3">
      <NavLink to="/">
        <div className="flex transition-all duration-300 ease-in-out hover:text-[#01b4e4] text-white flex-col items-center justify-center">
          <FaFire />
          <p className=" font-medium">Trending</p>
        </div>
      </NavLink>
      <NavLink to="/tvseries">
        <div className="flex transition-all duration-300 ease-in-out hover:text-[#01b4e4] text-white flex-col items-center justify-center">
          <PiTelevisionLight />
          <p className=" font-medium">TV Shows</p>
        </div>
      </NavLink>
      <NavLink to="/movies">
        <div className="flex transition-all duration-300 ease-in-out hover:text-[#01b4e4] text-white flex-col items-center justify-center">
          <MdLocalMovies />
          <p className=" font-medium">Movies</p>
        </div>
      </NavLink>

      <NavLink to="/search">
        <div className="flex transition-all duration-300 ease-in-out hover:text-[#01b4e4] text-white flex-col items-center justify-center">
          <FaSearch />
          <p className=" font-medium">Search</p>
        </div>
      </NavLink>
    </div>
  );
}

export default Footer;
