import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/AppContext';
import axios from 'axios';
import { MdCancel } from "react-icons/md";

function Genre({selectedGenre,setSelectedGenre,genreList,setGenreList,type,setPage}) {

    const {API_KEY} = useContext(AppContext);

    const genreURL = `https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}`

    async function fetchGenre(){
      
      try{
          const res = await axios.get(genreURL) ;
          const data = res.data;
          setGenreList([...data.genres]);  
      }
      catch(error){
          console.log(error); 
      }
    }
    // console.log(genreList)
    function addGenreHandler(genre){
        setSelectedGenre([...selectedGenre,genre]);
        setGenreList(genreList.filter((g)=>g.id !== genre.id));
        setPage(1);
      }
      function removeHandler(genre){
        setGenreList([...genreList,genre]);
        setSelectedGenre(selectedGenre.filter((g)=>g.id!==genre.id));
        setPage(1);
      }

      useEffect(()=>{
        fetchGenre();
      },[])

  return (
     <div>
        {
          (<div className="flex flex-wrap justify-center text-[10px] sm:text-sm sm:justify-start items-center mb-6 sm:pl-5 gap-2 ">
            {selectedGenre.map((genre)=>(
              <div onClick={()=>removeHandler(genre)} className="relative border-2 bg-blue-200 cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]  text-black w-13 rounded-xl text-xs sm:text-sm px-3 py-1 border-black " key={genre.id}>{genre.name} <div className='absolute right-[-7px] top-[-7px] text-white '><MdCancel></MdCancel></div> </div>
            ))}
          </div>)
        }
        {
          genreList.length === 0?
          (<div>No Filters Available</div>):
          (<div className="flex flex-wrap justify-center sm:justify-start items-center mb-6 sm:pl-5 gap-2 sm:gap-5">
            {genreList.map((genre)=>(
              <div onClick={()=>addGenreHandler(genre)} className="border-2 bg-richblack-700 cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]  text-gray-200 w-13 rounded-xl text-xs sm:text-sm px-3 py-1 border-black " key={genre.id}>{genre.name}</div>
            ))}
          </div>)
        }
      </div>
  )
}

export default Genre