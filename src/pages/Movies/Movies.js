import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer'
import MovieCard from '../../Components/MovieCard.js'
import fetchApi from '../../utils/api.js'
import { useDispatch, useSelector } from 'react-redux'
import { setMovieTvPageData } from '../../slice/movieSlice.js'

const Movies = () => {

  // const [movies,setMovies] = useState([]);
  const dispatch = useDispatch();
  const movies = useSelector(state=>state.movieReducer.movieTvPageData);

  const getData = async (url) => {
    const dataArr = await fetchApi(url)
    // console.log(dataArr.results);
    dispatch(setMovieTvPageData(dataArr.results))
    // setMovies(dataArr.results)
  }

  useEffect(()=>{
    getData('https://api.themoviedb.org/3/discover/movie');
  },[])

  return (
    <div style={{ backgroundColor:"#04152D", color: "white" }}>
        <Navbar/>
        <div className="flex flex-col gap-8 px-4 py-20 pt-28">
          <div className='px-4 w-full max-w-screen-xl m-auto' style={{border:'1px solid white'}}>

          </div>
          <div className='movies-cards-grid-container gap-4 gap-y-12 w-full max-w-screen-xl m-auto' style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))"}}>
            
            {
              movies.map((dataObj)=>{
                return <MovieCard movieName={dataObj.title} releaseDate={dataObj.release_date} rating={dataObj.vote_average} poster={dataObj.poster_path} />
              })
            }

          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Movies
