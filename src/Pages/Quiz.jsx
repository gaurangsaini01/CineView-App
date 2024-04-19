import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import data from "../data";
const Quiz = () => {
  const [type, setType] = useState("movie");
  return (
    <div className="text-white min-h-screen text-sm sm:text-base h-fit flex flex-col items-center">
      <h2 className="text-center text-2xl font-bold ">Quiz</h2>
      <div className="p-1 flex gap-1 mb-6  rounded-full mt-6  bg-richblack-800 max-w-max ">
        <button
          className={`${
            type === "movie"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-100"
          } py-3 px-5 rounded-full transition-all duration-200 ease-in`}
          onClick={() => {
            setType("movie");
          }}
        >
          Movie Quiz
        </button>
        <button
          className={`${
            type === "tv"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-100"
          } py-2 px-5 rounded-full transition-all duration-200 ease-out`}
          onClick={() => {
            setType("tv");
          }}
        >
          TV-Series Quiz
        </button>
      </div>

      <div className="w-10/12 sm:w-full">
        {data.map((quiz, index) => (
          <div key={index}>
            <div className="my-2 font-semibold text-richblack-100"><span className="font-bold">Q:-</span> {quiz.question}</div>
            <div className="flex gap-2">
              <input
                className="rounded-xl bg-slate-200 text-black p-1 w-[200px]"
                type="text"
              />
            </div>
          </div>
        ))}
      </div>
      <NavLink to='/recommended'>
      <button 
              className=" mb-4 mt-4 rounded-full w-[150px] bg-richblack-700 px-4 py-2 font-semibold cursor-pointer hover:opacity-90 focus:outline-none active:opacity-100 shadow-inner"
            >
              Submit
            </button>
      </NavLink>
    </div>
  );
};

export default Quiz;
