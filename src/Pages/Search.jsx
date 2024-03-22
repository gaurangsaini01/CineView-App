import {React,useEffect,useContext,useState} from 'react'
import AppContext from 'antd/es/app/context';
import axios from 'axios';
function Search() {
  const { setLoading, loading, API_KEY } = useContext(AppContext);
  const[type,setType] = useState('movie');
  const[page,setPage] = useState(1);
  const[search,setSearch] = useState('');

  const searchURL = `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&query=${search}&include_adult=true&language=en-US&page=${page}`;
 
  async function fetchData(){  
    const URL = `${searchURL}?api_key=${API_KEY}&page=${page}`;
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

  return (
    <div>
      hi
    </div>
  )
}

export default Search