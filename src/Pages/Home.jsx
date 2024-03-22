import React, { useContext, useEffect,useState } from "react";
import { AppContext } from "../Context/AppContext";
import Loader from "../Components/Loader";
import TrendingCard from "../Components/TrendingCard";
import { Pagination } from "antd";
import axios from "axios";

function Home() {

  let trendingUrl = `https://api.themoviedb.org/3/trending/all/day`;
  const[movies,setMovies] = useState([]);
  const[page,setPage] = useState(1);
  const {setLoading,loading,API_KEY} = useContext(AppContext);

  async function fetchData(){
    
    const URL = `${trendingUrl}?api_key=${API_KEY}&page=${page}`;
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
  
  // console.log(movies);
  return (
    <div className="flex flex-col w-full xl:w-10/12 mb-4">
      <div className="w-full  text-sm py-5 md:text-2xl text-gray-600 font-semibold md:py-4 flex justify-center items-center">
        <h2>Weekly Trending Movies & Web-Series !</h2>
      </div>
      {loading ? (
        <div className="h-[70vh] flex justify-center items-center">
          <Loader></Loader>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-y-[4vh] md:gap-y-[6vh] gap-x-[3vw]">
          {movies.map((movie) => (
            <TrendingCard key={movie.id} movie={movie}></TrendingCard>
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

export default Home;
