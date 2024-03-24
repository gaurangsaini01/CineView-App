import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MdArrowBack } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";

function MovieDesc() {
  function backHandler() {
    window.history.back();
  }
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const { id } = params;
  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  async function fetchData() {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    try {
      const res = await axios.get(url);
      const data = res.data;
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-[98vw] min-h-[100vh]  flex flex-col items-center  text-white">
      {/* title and back button */}
      <div className="w-full flex relative">
        <div onClick={backHandler} className="absolute  left-5 top-5">
          <button className="Btn">
            <div className="pl-3">
              <MdArrowBack />
            </div>
            <div className="text">Back</div>
          </button>
        </div>
        <div className="w-full items-center flex flex-col justify-center">
          <div className="mt-4 text-2xl sm:text-5xl font-semibold">
            <h1>{movie?.title || movie?.name}</h1>
          </div>
          <div className="sm:mt-2">
            <span className="font-semibold text-xs sm:text-sm text-richblack-200">{movie?.tagline}</span>
          </div>
        </div>
      </div>
      {/* details box */}
      <div className="flex sm:flex-row sm:h-fit items-center justify-center sm:items-start mt-4 sm:mt-7 flex-col w-full sm:justify-evenly">
        {/* image div */}
        <div className="sm:w-1/3 mt-3 mb-5 sm:mt-0  flex justify-center">
          <img
            className="w-[200px] rounded-xl sm:w-[300px]"
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt="Movie Image"
          />
        </div>
        <div className="sm:w-2/3 mb-4 sm:mb-2 pr-14 sm:h-fit  sm:pl-0 flex flex-col gap-4 sm:gap-5">
          <div className="sm:text-4xl text-base font-lagao sm:tracking-wide text-richblack-25 sm:mb-6">"{movie?.overview}"</div>
          <div className="flex items-center">
            <span className="font-bold sm:text-2xl text-richblack-25 text-base">Genres - </span>
            {movie?.genres?.map((genre)=><span key={genre.id} className="text-richblack-200 sm:text-xl mr-3">{genre.name},</span>)}
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold sm:text-2xl text-richblack-25 text-base">Release Date:- </span>
            <span className="text-richblack-200 sm:text-xl">{movie?.release_date}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold sm:text-2xl text-richblack-25 text-base">VoteCount:-</span>
            <span className="text-richblack-200 sm:text-xl">{movie?.vote_count}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold sm:text-2xl text-richblack-25 text-base">Status:-</span>
            <span className="text-richblack-200 sm:text-xl">{movie?.release_date}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-bold sm:text-2xl text-richblack-25 text-base">Watch Here -</span>
            <a className=" bg-white p-1 sm:p-2 hover:bg-blue-300 transition-all duration-200 ease-in rounded-full text-black text-base sm:text-2xl" href={movie?.homepage}>
            <BiMoviePlay/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDesc;
