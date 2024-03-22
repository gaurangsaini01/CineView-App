import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import Loader from "../Components/Loader";
import MovieCard from "../Components/MovieCard";
import { Pagination } from "antd";
import axios from "axios";

function Movies() {
  const movieURL = 'https://api.themoviedb.org/3/discover/movie';
  
  const[movies,setMovies] = useState([]);
  const[page,setPage] = useState(1);
  const {setLoading,loading,API_KEY} = useContext(AppContext);

  async function fetchData(){
    const URL = `${movieURL}?api_key=${API_KEY}&page=${page}`;
    setLoading(true);
    try{
        const res = await axios.get(URL) ;
        const data = res.data;
        setPage(data.page);
        setMovies([...data.results]);  
    }
    catch(error){
        console.log(error); 
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="flex mb-4 flex-col w-full xl:w-10/12">
      <div className="w-full py-2 text-2xl text-gray-600 font-semibold md:py-4 flex justify-center items-center">
        <h2>Discover Popular Movies</h2>
      </div>
     
      {/* <div>
        {
          genreList > 0?
          (<div>No Filters Available</div>):
          (<div className="flex overflow-scroll sm:overflow-hidden sm:flex-wrap justify-center sm:justify-start items-center mb-6 sm:pl-5 gap-2 sm:gap-5">
            {genreList.map((genre)=>(
              <div onClick={()=>genreHandler(genre.id)} className="border-2 cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#060d17] text-gray-200 w-13 rounded-xl text-xs sm:text-sm px-3 py-1 border-black " key={genre.id}>{genre.name}</div>
            ))}
          </div>)
        }
      </div> */}
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
      <div className="w-[90vw] my-7 flex justify-center items-center">
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
