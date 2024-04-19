import React, {useState } from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { AppContext } from "./Context/AppContext";
import Footer from "./Components/Footer";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import TVshows from "./Pages/TVshows/TVshows";
import Desc from "./Components/MovieDesc";
import TVdesc from "./Components/TVdesc";
import Quiz from "./Pages/Quiz";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Recommended from "./Pages/Recommended"

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <div className="flex flex-col items-center bg-richblack-900">
      <Header></Header>
      <Routes>
        <Route path="/MovieDesc/:id" element={<Desc></Desc>} />
        <Route path="/TVdesc/:id" element={<TVdesc></TVdesc>} />
        <Route path="/" element={<Home></Home>} />
        <Route path="/movies" element={<Movies></Movies>} />
        <Route path="/tvseries" element={<TVshows></TVshows>} />
        <Route path="/search" element={<Search></Search>} />
        {/* <Route path="/quiz" element={<Quiz></Quiz>} /> */}
        <Route path="/recommended" element={<Recommended></Recommended>} />
        <Route path="/login" loginStatus={loginStatus} element={<Login></Login>} />
        <Route path="/signup" loginStatus={loginStatus} element={<Signup></Signup>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
