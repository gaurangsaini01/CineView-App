import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import Loader from "../Components/Loader";
import Tvcard from "../Components/Tvcard";
import { Pagination } from "antd";
import axios from "axios";

function TVshows() {
  const tvURL = "https://api.themoviedb.org/3/discover/tv";

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  
  const { setLoading, loading, API_KEY } = useContext(AppContext);

  async function fetchData() {
    const URL = `${tvURL}?api_key=${API_KEY}&page=${page}`;
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
  }, [page]);

  return (
    <div className="flex mb-4 flex-col items-center w-full xl:w-10/12">
      <div className="w-full py-2 text-2xl text-gray-600 font-semibold md:py-4 flex justify-center items-center">
        <h2>Discover Popular TV Shows</h2>
      </div>
      {loading ? (
        <div className="w-full h-[70vh] flex justify-center items-center">
          <Loader></Loader>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-y-[4vh] md:gap-y-[6vh] gap-x-[3vw]">
          {movies.map((movie) => (
            <Tvcard key={movie.id} movie={movie}></Tvcard>
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

export default TVshows;
