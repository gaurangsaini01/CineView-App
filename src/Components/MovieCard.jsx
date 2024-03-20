import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="flex flex-col bg-gray-700 w-[250px] hover:scale-110 transition-all duration-300 ease-in-out h-fit p-3 rounded-xl text-gray-200 cursor-pointer items-center ">
      <div>
        <img className="rounded-xl"
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt="Poster Not Found"
        />
      </div>
      <div>
        <h3>{movie.media_type === "movie"
            ? movie.title
            : movie.name}</h3>
      </div>
      <div className="flex w-full justify-between">
        <div>{movie.media_type === "movie" ? "Movie" : "TV Series"}</div>
        <div>
          {movie.media_type === "movie"
            ? movie.release_date
            : movie.first_air_date}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
