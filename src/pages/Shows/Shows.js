import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar.js'
import Footer from '../../Components/Footer.js'
import MovieCard from '../../Components/MovieCard.js'
import fetchApi from '../../utils/api.js'
import { useDispatch, useSelector } from 'react-redux'
import { setMovieTvPageData } from '../../slice/movieSlice.js'
import Select from 'react-select'
import {genreOptions,sortByOptions} from "../../utils/selectOptions.js";
import InfiniteScroll from "react-infinite-scroll-component";


const Shows = () => {

  const [genreTv,setGenreTv] = useState([]);

  const genreTvRef = useRef();

  const dispatch = useDispatch();
  const movies = useSelector(state=>state.movieReducer.movieTvPageData);

  const getData = async () => {
    const page = (movies.length / 20) + 1;
    const dataArr = await fetchApi(`https://api.themoviedb.org/3/discover/tv?page=${page}`)
    dispatch(setMovieTvPageData([...movies, ...dataArr.results]))
    // console.log(dataArr.results);
  }

  useEffect(()=>{
    getData();
  },[])

  const getGenreData = async (genreIdsArr) => {
    const page = (genreTv.length / 20) + 1;
    const genreIdsStr = genreIdsArr.join(',')
    const dataArr = await fetchApi(`https://api.themoviedb.org/3/discover/tv?page=${page}with_genres=${genreIdsStr}`);
    // console.log('genre',dataArr);
    setGenreTv([...genreTv, ...dataArr.results])
  }

  const handleGenreFilter = (e) => {

    const genreIdsArr = e.map((obj) => {
      return Number(obj.value)
    })

    getGenreData(genreIdsArr)

  }

  return (
    <div style={{ backgroundColor:"#04152D", color: "white" }}>
        <Navbar/>
        <div className="flex flex-col gap-8 px-4 py-20 pt-28">
        <div
          className="px-4 w-full max-w-screen-xl m-auto flex justify-between items-center"
        >
          <p>Explore Movies</p>

          <div className="flex gap-3">
            <Select
              ref={genreTvRef}
              // value={genre}
              onChange={(e)=>{
                handleGenreFilter(e)
              }}
              options={genreOptions}
              // defaultValue={[colourOptions[2], colourOptions[3]]}
              isMulti
              name="colors"
              className="basic-multi-select text-black"
              classNamePrefix="select"
              placeholder="Select genres"
            />
            <Select
              options={sortByOptions}
              // defaultValue={[colourOptions[2], colourOptions[3]]}
              isMulti
              name="colors"
              className="basic-multi-select text-black"
              classNamePrefix="select"
              placeholder="Sort by"
            />
          </div>

        </div>
          <div>
            
          <InfiniteScroll
            className="movies-cards-grid-container gap-4 gap-y-12 w-full max-w-screen-xl m-auto"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
            }}
            
            dataLength={movies.length || genreTv.length} 
            next={getData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >

          {
            genreTv.length ? 

            genreTv.map((dataObj) => {
              return (
                <MovieCard
                  key={dataObj.id}
                  genre={dataObj.genre_ids}
                  movieName={dataObj.title}
                  releaseDate={dataObj.release_date}
                  rating={dataObj.vote_average}
                  poster={dataObj.poster_path}
                />
              )
            })

            :
          
            movies.map((dataObj) => {
              return (
                <MovieCard
                  key={dataObj.id}
                  genre={dataObj.genre_ids}
                  movieName={dataObj.title}
                  releaseDate={dataObj.release_date}
                  rating={dataObj.vote_average}
                  poster={dataObj.poster_path}
                />
              )
            })
          
          }

          </InfiniteScroll>

          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Shows
