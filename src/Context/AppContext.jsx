import { createContext, useState } from "react";
import axios from "axios"; 

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const API_KEY = import.meta.env.VITE_APP_API_KEY;
    const[category,setCategory] = useState('all')
    const baseURL = `https://api.themoviedb.org/3/trending/${category}/day?api_key=${API_KEY}`;
    const[loading,setLoading] = useState(false);
    const[movies,setMovies] = useState([])
    const[page,setPage]=useState(1);
    //data filling
    async function fetchData(page = 1){
        setLoading(true);
        let url = `${baseURL}&page=${page}` ;
        try{
            const res = await axios.get(url) ;
            const data =await  res.data ;
            console.log(data.results) ;
            setPage(data.page);
            setMovies(prevMovies => [...prevMovies, ...data.results]);    
        }
        catch(error){
            console.log(error);
        }
        setLoading(false);
    }

    function handlePageChange(page){ 
        setPage(page);
        fetchData(page);
    }

    const value={
        baseURL,loading,setLoading,handlePageChange,fetchData,setMovies,movies,page,setPage,category,setCategory
    }
    return <AppContext.Provider value={value}> {children} </AppContext.Provider>
}

