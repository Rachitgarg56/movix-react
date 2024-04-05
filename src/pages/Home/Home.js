import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import MovieCardsSlider from "../../Components/MovieCardsSlider";
import './Home.css';
import Footer from "../../Components/Footer";
import fetchApi from "../../utils/api";
import { setPopular, setTopRated, setTrending } from "../../slice/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Homes = () => {

  const [input,setInput] = useState(''); 
  const navigate = useNavigate();

  const dayOrWeek = useSelector(state=>state.movieReducer.day);
  const movieOrTvPopular = useSelector(state=>state.movieReducer.moviePopular);
  const movieOrTvToprated = useSelector(state=>state.movieReducer.movieTopRated);

  const dispatch = useDispatch();

  const getTrending = async (url) => {
    const trending = await fetchApi(url)
    dispatch(setTrending(trending.results))
  }

  const getPopular = async (url) => {
    const popular = await fetchApi(url)
    dispatch(setPopular(popular.results))
  }

  const getTopRated = async (url) => {
    const topRated = await fetchApi(url)
    dispatch(setTopRated(topRated.results))
  }

  useEffect(()=> {
    getTrending(`https://api.themoviedb.org/3/trending/all/${dayOrWeek?'day':'week'}`);
    getPopular(`https://api.themoviedb.org/3/${movieOrTvPopular?'movie':'tv'}/popular`);
    getTopRated(`https://api.themoviedb.org/3/${movieOrTvToprated?'movie':'tv'}/top_rated`);
  },[dayOrWeek,movieOrTvPopular,movieOrTvToprated])

  return (
    <div style={{ backgroundColor:"#04152D", color: "white" }}>
      
      {/* navbar */}
      <Navbar />

      {/* main-section */}
      <section className="home-main flex items-center justify-center p-4" style={{height:"90vh"}}>
        <main className="flex flex-col items-center gap-8 w-full">
          <div className="flex flex-col items-center">
            <h1 className="text-8xl font-bold">Welcome.</h1>
            <p className="text-2xl font-medium text-center">Millions of movies, TV shows and people to discover. Explore now.</p>
          </div>
          <div className="bg-red-900 max-w-screen-md w-full rounded-full text-lg">
              <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Search for a movie or tv show..." className="rounded-l-full w-4/5 font-semibold px-8 p-4 text-black" />
              <button onClick={()=>navigate(`/search/${input}`)} className="rounded-r-full w-1/5 p-4" style={{background:"var(--gradient)"}}>Search</button>
          </div>
        </main>
      </section>

      {/* sliders section */}
      <section className="card-sliders flex flex-col gap-20 pt-8 pb-20 px-4">
        
        {/* trending-slider */}
        <MovieCardsSlider type="Trending" call="trending" />

        {/* trending-slider */}
        <MovieCardsSlider type="What's Popular" call="popular" />

        {/* trending-slider */}
        <MovieCardsSlider type="Top Rated" call="toprated" />
     
      </section>

      <Footer/>

    </div>
  );
};

export default Homes;

