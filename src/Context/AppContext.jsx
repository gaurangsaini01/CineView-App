import { createContext, useState } from "react";
import axios from "axios"; 

export const AppContext = createContext();

export default function AppContextProvider({children}){

    const API_KEY = import.meta.env.VITE_APP_API_KEY;
    const[loading,setLoading] = useState(false);
    
    
    const[totalPages,setTotalPages] = useState(null);

    //data filling
    async function fetchData(url){
        const URL = `${url}?api_key=${API_KEY}&page=${page}`;
        setLoading(true);
        try{
            const res = await axios.get(URL) ;
            const data = res.data;
            setTotalPages(data.total_pages);
            setPage(data.page);
            setMovies([...data.results]);  
        }
        catch(error){
            console.log(error); 
        }
        setLoading(false);
    }


    const value={
        loading,setLoading,setTotalPages,totalPages,API_KEY
    }
    return <AppContext.Provider value={value}> {children} </AppContext.Provider>
}

