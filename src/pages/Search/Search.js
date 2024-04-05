import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer'
import MovieCard from '../../Components/MovieCard'
import fetchApi from '../../utils/api'
import { useParams } from 'react-router-dom'

const Search = () => {
    
    const [data,setData] = useState([]);

    const { query } = useParams();

    const getData = async (url) => {
        const dataArr = await fetchApi(url)
        setData(dataArr.results)
    }

    useEffect(() => {
        getData(`https://api.themoviedb.org/3/search/multi?query=${query}&page=1`)
    },[])

  return (
    <div className='search-page' style={{ backgroundColor:"#04152D", color: "white" }}>
      <Navbar/>

      <div className='flex flex-col gap-8 px-4 py-20 pt-28 min-h-screen'>
        <p className='max-w-screen-xl m-auto w-full text-2xl font-normal'>Search results of '{query}'</p>
        <div className='search-results-container gap-4 gap-y-12 w-full max-w-screen-xl m-auto' style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))"}}>

            {
                !data.length ? '' :
                data.map((dataObj)=>{
                    return <MovieCard movieName={dataObj.name} releaseDate={dataObj.first_air_date} poster={dataObj.poster_path} key={dataObj.id} showRating='false' />
                })
            }

        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Search

