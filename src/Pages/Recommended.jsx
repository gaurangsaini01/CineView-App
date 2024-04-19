import React, { useState ,useEffect} from "react";
import { MdArrowBack } from "react-icons/md";
import { NavLink } from "react-router-dom";
import MovieCard from "../Components/MovieCard";
import axios from "axios";
const Recommended = () => {
    const[movies,setMovies] = useState([]);
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=ac145313f376c88e314ef0aa90eb8ba0&page=4`;

    function backHandler() {
        window.history.back();
      }
      async function fetchData() {
        try {
          const res = await axios.get(url);
          const data = res.data;
          setMovies(data);
        } catch (error) {
          console.log(error);
        }
      }
      useEffect(() => {
        fetchData();
      }, []);
      
  return (
    <div className="w-full text-white h-fit">
      <div className="relative w-full">
        <h1 className="text-xl text-center sm:text-2xl xl:text-4xl mt-4 font-bold capitalize">
          Recommended 
        </h1>
        <div onClick={backHandler} className="absolute top-1 left-3">
          <button className="Btn">
            <div className="pl-3">
              <MdArrowBack />
            </div>
            <div className="text">Back</div>
          </button>
        </div>
      </div>
      <div  className="flex flex-wrap mt-5 items-center justify-center gap-y-[4vh] md:gap-y-[6vh] gap-x-[3vw]">
          {movies.results?.map((movie) => (
           <NavLink key={movie.id} to={`/MovieDesc/${movie.id}`}> <MovieCard  movie={movie}></MovieCard> </NavLink>
          ))}
        </div>
    </div>
  );
};

export default Recommended;
