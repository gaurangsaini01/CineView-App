import { React, useEffect, useContext, useState } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";
import Tvcard from "../Components/Tvcard";

function Search() {
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState("movie");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(type);

  const searchURL = `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=true`;

  function changeHandler(e) {
    if (e.target.value.length === 0) setSearch(type);
    else setSearch(e.target.value);
  }

  function fetchData() {
    setLoading(true);
    axios.get(searchURL)
      .then(res => {
        const data = res.data;
        setMovies([...data.results]);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    
    <div className="w-full min-h-[100vh] h-fit flex items-center flex-col">
      <div className="flex w-11/12 sm:w-10/12 gap-3 sm:gap-10 my-2 sm:my-6 justify-center">
        <input
          onChange={changeHandler}
          type="text"
          className="w-full font-semibold p-2 sm:p-3 rounded-3xl border-2 border-gray-800"
          placeholder="Search something"
        />
        {/* <button onClick={changeHandler} className="py-2 px-3 sm:py-3 sm:px-7 rounded-3xl">Search</button> */}
      </div>
      <div className="p-1 flex gap-1 mb-6  rounded-full  bg-richblack-800 max-w-max ">
        <button
          className={`${
            type === "movie"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-100"
          } py-3 px-5 rounded-full transition-all duration-200 ease-in`}
          onClick={() => {
            setSearch("movie");
            setType("movie");
          }}
        >
          Search Movie
        </button>
        <button
          className={`${
            type === "tv"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-100"
          } py-2 px-5 rounded-full transition-all duration-200 ease-out`}
          onClick={() => {
            setSearch("tv");
            setType("tv");
          }}
        >
          Search TV-Series
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center mb-4 gap-y-[4vh] md:gap-y-[6vh] gap-x-[3vw]">
        {type === "movie"
          ? movies?.map((movie) => (
              <MovieCard key={movie.id} movie={movie}></MovieCard>
            ))
          : movies?.map((movie) => (
              <Tvcard key={movie.id} movie={movie}></Tvcard>
            ))}
      </div> 
      
    </div>
  );
}

export default Search;
