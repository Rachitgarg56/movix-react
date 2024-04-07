import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import './MovieDetails.css'

import demoImg from '../../assets/home-bg-ex.jpg'
import MovieCard from "../../Components/MovieCard";
import fetchApi from "../../utils/api";

const MovieDetails = () => {

      const [movieDetails,setMovieDetails] = useState([]);

      const getMovieDetails = async () => {
        const data = await fetchApi('https://api.themoviedb.org/3/movie/1083658')
        setMovieDetails(data)
        console.log('data',data);
      }

      useEffect(()=>{
        getMovieDetails()
      },[])

  return (
    <div style={{ backgroundColor: "#04152D", color: "white" }}>
      
      {/* <Navbar /> */}

      {/* first container */}
      <div className="contentWrapper">
        <div className="content flex gap-10">
          <div className="left w-96 rounded-xl" style={{height:"500px"}}>
            
              <img
                className="posterImg w-full h-full object-cover rounded-xl"
                alt="movie-poster"
                src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
              />

          </div>
          <div className="right flex flex-col gap-1">
            <div className="title text-3xl font-semibold">{movieDetails.title}</div>
            <div className="subtitle">{movieDetails.tagline}</div>
            <div className="genres mb-3">
              <div className="genre">Comedy</div>
            </div>

            <div className="row flex items-center gap-6 mb-4">

                <div className="circleRating w-20 h-20">
                    <svg className="CircularProgressbar" viewBox="0 0 100 100" data-test-id="CircularProgressbar">
                        <path className="CircularProgressbar-trail" d={`
                        M 50,50
                        m 0,-46
                        a 46,46 0 1 1 0,92
                        a 46,46 0 1 1 0,-92
                        `} strokeWidth={8} fillOpacity={0} style={{ strokeDasharray: '289.027px, 289.027px', strokeDashoffset: '0px' }} />
                        <path className="CircularProgressbar-path" d={`
                        M 50,50
                        m 0,-46
                        a 46,46 0 1 1 0,92
                        a 46,46 0 1 1 0,-92
                        `} strokeWidth={8} fillOpacity={0} style={{ stroke: 'orange', strokeDasharray: '289.027px, 289.027px', strokeDashoffset: '95.3788px' }} />
                        <text fill="white" className="CircularProgressbar-text text-4xl" x="50" y="50" text-anchor="middle" dy={10}>6.7</text>
                    </svg>
                </div>


              <div className="playbtn flex items-center gap-6">                

                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                    <polygon stroke="#fff" className="triangle" fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                    <circle stroke="#fff" className="circle" fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                </svg>


                <span className="text-lg">Watch Trailer</span>
              </div>

            </div>

            <div className="overview mb-8 flex flex-col gap-2 font-medium">
              <div className="heading text-2xl">Overview</div>
              <div className="description">
                {movieDetails.overview}
              </div>
            </div>

            <div className="info mb-4">
              <div className="infoItem flex gap-2">
                <span className="text font-bold">Status: </span>
                <span className="text-gray-400">{movieDetails.status}</span>
              </div>
            </div>

            <hr className="mb-4" style={{borderBottom:"1px solid gray"}}/>

            <div className="info mb-4 flex gap-2">
              <span className="text font-bold">Creator: </span>
              <span className="text">
                <span className="text-gray-400">Rhett McLaughlin, </span>
                <span className="text-gray-400">Link Neal</span>
              </span>
            </div>
            
            <hr style={{borderBottom:"1px solid gray"}}/>

          </div>
        </div>
        <div className="videoPopup">
          <div className="opacityLayer"></div>
          <div className="videoPlayer">
            <span className="closeBtn">Close</span>
            <div style={{width: '100%', height: '100%'}}></div>
          </div>
        </div>
      </div>

      {/* top-cast-container */}
      <div className="castSection">

      <div className="contentWrapper flex flex-col">

        <div className="sectionHeading text-2xl mb-6">Top Cast</div>

        <div className="listItems flex">

          <div className="listItem flex flex-col items-center">
            <div className="profileImg w-48 h-48 flex mb-6">
                <img className="w-full h-full object-cover rounded-full" alt="" src="https://image.tmdb.org/t/p/original/nkNxzM4AYcQQswu3y7oOY5Kovfa.jpg" />
            </div>
            <div className="name font-bold text-lg">Link Neal</div>
            <div className="character text-gray-400">Self - Host</div>
          </div>

        </div>

      </div>

      </div>


      {/* official-videos-container */}
      <div className="videosSection mt-10">
      <div className="contentWrapper">
        <div className="sectionHeading text-2xl mb-4">Official Videos</div>
        <div className="videos flex">

          <div className="videoItem">
            <div className="videoThumbnail rounded-lg relative mb-4">
              {/* <span
                className=" lazy-load-image-background blur lazy-load-image-loaded"
                style={{ color: 'transparent', display: 'inline-block' }}
              > */}
                <img
                  className="rounded-lg"
                  alt=""
                  src="https://img.youtube.com/vi/1iLbfGIygO0/mqdefault.jpg"
                />
              {/* </span> */}
              <svg
                className="absolute top-1/3 left-1/3 z-10 w-12 h-12"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="80px"
                height="80px"
                viewBox="0 0 213.7 213.7"
                enableBackground="new 0 0 213.7 213.7"
                xmlSpace="preserve"
              >
                <polygon
                  stroke="white"
                  className="triangle"
                  fill="none"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="73.5,62.5 148.5,105.8 73.5,149.1 "
                ></polygon>
                <circle
                  stroke="white"
                  className="circle"
                  fill="none"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  cx="106.8"
                  cy="106.8"
                  r="103.3"
                ></circle>
              </svg>

            </div>
            <div className="videoTitle">Famous Last Words 3</div>

          </div>
        </div>
      </div>
      <div className="videoPopup ">
        <div className="opacityLayer"></div>
        <div className="videoPlayer">
          <span className="closeBtn">Close</span>
          <div style={{ width: '100%', height: '100%' }}></div>
        </div>
      </div>
      </div>

      {/* similar tv shows */}
      <div className='px-4 slider w-full max-w-screen-xl m-auto flex flex-col gap-6 mb-8'>

        <div className='slider-heading flex items-center justify-between w-full'>
            <h2 className='text-2xl'>Similar TV Shows</h2>
            {/* <DayWeekBtn type={call}/> */}
        </div>

        <div className='carousel w-full overflow-x-scroll scrollbar-hidden'>

            <div className='flex gap-5 inner-slider w-fit'>

                {
                    // movieDetails.map((dataObj)=>{
                    //     return <MovieCard key={dataObj.id} genre={dataObj.genre_ids} movieName={dataObj.name} rating={dataObj.vote_average} releaseDate={dataObj.first_air_date} poster={dataObj.poster_path} />
                    // })
                }

            </div>
        
        </div>
    
      </div>

      {/* recommendations */}
      <div className='px-4 slider w-full max-w-screen-xl m-auto flex flex-col gap-6'>

        <div className='slider-heading flex items-center justify-between w-full'>
            <h2 className='text-2xl'>Recommendations</h2>
            {/* <DayWeekBtn type={call}/> */}
        </div>

        <div className='carousel w-full overflow-x-scroll scrollbar-hidden'>

            <div className='flex gap-5 inner-slider w-fit'>

                {/* {
                    dataArr.map((dataObj)=>{
                        return <MovieCard key={dataObj.id} genre={dataObj.genre_ids} movieName={dataObj.name} rating={dataObj.vote_average} releaseDate={dataObj.first_air_date} poster={dataObj.poster_path} />
                    })
                } */}

            </div>
        
        </div>
    
     
      </div>

      <Footer />

    </div>
  );
};

export default MovieDetails;
