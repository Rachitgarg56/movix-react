import React from 'react'
import './MovieCardsSlider.css'
import DayWeekBtn from './DayWeekBtn/DayWeekBtn'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const MovieCardsSlider = ( { type, call } ) => {
    
    const dataArr = useSelector(state => state.movieReducer[call])
    // console.log(call, dataArr);

  return (
    <div className='slider w-full max-w-screen-xl m-auto flex flex-col gap-6'>

        <div className='slider-heading flex items-center justify-between w-full'>
            <h2 className='text-2xl'>{type}</h2>
            <DayWeekBtn type={call}/>
        </div>

        <div className='carousel w-full overflow-x-scroll scrollbar-hidden'>

            <div className='flex gap-5 inner-slider w-fit'>

                {
                    dataArr.map((dataObj)=>{
                        return <MovieCard key={dataObj.id} genre={dataObj.genre_ids} movieName={dataObj.name} rating={dataObj.vote_average} releaseDate={dataObj.first_air_date} poster={dataObj.poster_path} />
                    })
                }

            </div>
        
        </div>
    
    </div>
  )
}

export default MovieCardsSlider
