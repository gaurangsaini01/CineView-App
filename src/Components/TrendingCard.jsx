import React from "react";

function TrendingCard({ movie }) {
  const truncatedName =
    movie.name > 16 ? movie.name.substr(0, 16) + "..." : movie.name;
  const truncatedTitle =
    movie.title > 16 ? movie.title.substr(0, 16) + "..." : movie.title;
  return (
    <div className="flex flex-col h-[350px] bg-gray-700 w-[200px] hover:scale-105 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:bg-gray-600 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] justify-evenly transition-all duration-300 ease-in-out  p-3 relative rounded-xl text-gray-200 cursor-pointer items-center ">
      <div
        className={`absolute right-[-10px] ${
          movie.vote_average > 6 ? "bg-green-600" : "bg-red-500"
        } flex justify-center items-center font-medium text-[0.7rem] rounded-full w-[35px] p-2 top-[-10px]`}
      >
        {movie.vote_average.toFixed(2)}
      </div>
      <div className="h-[255px] w-[175px]">
        <img
          className="rounded-xl h-full w-full object-contain"
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt="Poster Not Found"
        />
      </div>
      <div>
        <h3 className="font-semibold">
          {movie.media_type === "movie"
            ? movie.title.length > 16
              ? movie.title.substring(0, 16) + "..."
              : movie.title
            : movie.name.length > 16
            ? movie.name.substring(0, 16) + "..."
            : movie.name}
        </h3>
      </div>
      <div className="flex w-full justify-between text-gray-400">
        <div>{movie.media_type === "tv" ? "TV-Series" : "Movie"}</div>
        <div>
          {movie.media_type === "tv"
            ? movie.first_air_date
            : movie.release_date}
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
