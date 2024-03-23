import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import Loader from "../Components/Loader";
import MovieCard from "../Components/MovieCard";
import { Pagination } from "antd";
import axios from "axios";
import Genre from "../Components/Genre";
import useGenres from "../hooks/useGenres";

function Movies() {
  const { setLoading, loading, API_KEY } = useContext(AppContext);
  const [genreList, setGenreList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const genreForUrl = useGenres(selectedGenre);

  const movieURL = `https://api.themoviedb.org/3/discover/movie`;

  async function fetchData() {
    const URL = `${movieURL}?api_key=${API_KEY}&page=${page}&with_genres=${genreForUrl}`;
    setLoading(true);
    try {
      const res = await axios.get(URL);
      const data = res.data;
      setPage(data.page);
      setMovies([...data.results]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [page, genreForUrl]);
  console.log(movies);
  return (
    <div className="flex mb-4 flex-col items-center w-full xl:w-10/12">
      <div className="w-full py-2 text-sm sm:text-2xl mb-1 text-gray-600 font-semibold md:py-4 flex justify-center items-center">
        <h2>Discover Popular Movies</h2>
      </div>
      <div>
        <Genre
          genreList={genreList}
          setGenreList={setGenreList}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          type="movie"
          setPage={setPage}
        ></Genre>
      </div>

      {loading ? (
        <div className="w-full h-[75vh] flex justify-center items-center">
          <Loader></Loader>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-y-[4vh] md:gap-y-[6vh] gap-x-[3vw]">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          ))}
        </div>
      )}
      <div className=" p-3 rounded-2xl bg-richblack-200 text-white sm:my-7">
        <Pagination
          onChange={(_page) => setPage(_page)}
          showQuickJumper
          defaultCurrent={page}
          total={500}
        />
      </div>
    </div>
  );
}

export default Movies;
