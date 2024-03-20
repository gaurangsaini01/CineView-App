import React from "react";
import { FaFire } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full sticky bottom-0 flex items-center justify-center gap-[5vw] sm:gap-[10vw] bg-gray-500 py-2 sm:py-4">
      <NavLink to="/">
        <div className="flex text-white flex-col items-center justify-center">
          <FaFire />
          <p className=" font-semibold">Trending</p>
        </div>
      </NavLink>
      <NavLink to='/movies'>
        <div className="flex text-white flex-col items-center justify-center">
          <MdLocalMovies />
          <p className=" font-semibold">Movies</p>
        </div>
      </NavLink>
      <NavLink to='/TVshows'>
      <div className="flex text-white flex-col items-center justify-center">
        <PiTelevisionLight />
        <p className=" font-semibold">TV Shows</p>
      </div>
      </NavLink>
      <NavLink to='/search'>
      <div className="flex text-white flex-col items-center justify-center">
        <FaSearch />
        <p className=" font-semibold">Search</p>
      </div>
      </NavLink>
      
    </div>
  );
}

export default Footer;
