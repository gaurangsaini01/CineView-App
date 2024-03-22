import React from "react";

function Tvcard({ movie }) {
    const newName =`${movie?.name.slice(0,16)}...`
  return (
    <div className="h-[340px] flex flex-col bg-gray-700 w-[200px] hover:scale-105 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:bg-gray-600 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] justify-between transition-all duration-300 ease-in-out  p-3 relative rounded-xl text-gray-200 cursor-pointer items-center ">
      <div className={`absolute right-[-10px] ${movie.vote_average>6?'bg-green-600':'bg-red-500'} flex justify-center items-center font-medium text-[0.7rem] rounded-full w-[35px] p-2 top-[-10px]`}>{movie.vote_average.toFixed(2)}</div>
      <div>
        <img className="rounded-xl"
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt="Poster Not Found"
        />
      </div>
      <div>
        <h3 className="font-semibold">{movie.name.length>16 ? (newName):(movie?.name) }</h3>
      </div>
      <div className="flex w-full justify-between text-gray-400">
        <div>TV-Series</div>
        <div>
          {movie.first_air_date}
        </div>
      </div>
    </div>
  );
}

export default Tvcard;
