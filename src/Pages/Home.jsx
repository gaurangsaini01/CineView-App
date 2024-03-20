import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import MovieCard from "../Components/MovieCard";

function Home() {
  const { loading, movies } = useContext(AppContext);
  return (
    <div className="flex flex-col w-full xl:w-10/12">
      <div className="w-full py-2 text-2xl text-gray-600 md:py-4 flex justify-center items-center">
        <h2>Top Trending Movies</h2>
      </div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-y-[4vh] gap-x-[5vw]">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
