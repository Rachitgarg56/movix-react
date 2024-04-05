import React, { useRef, useState } from 'react'
import './DayWeekBtn.css'
import { useDispatch, useSelector } from 'react-redux';
import { setDayWeek, setMovieTvToprated, setMovieTvPopular } from '../../slice/movieSlice';

const DayWeekBtn = ( { type } ) => {

    const dayOrWeek = useSelector(state=>state.movieReducer.day);
    const movieOrTvPopular = useSelector(state=>state.movieReducer.moviePopular);
    const movieOrTvToprated = useSelector(state=>state.movieReducer.movieTopRated);

    const dispatch = useDispatch();
    const btnRef = useRef();
    const [clickedOdd, setClickedOdd] = useState(false);

    const handleTransition = () => {
        const btn = btnRef.current;
        btn.classList.toggle('transform-right');

        if (clickedOdd) btn.innerText = type === 'trending' ? 'Day' : 'Movies'
        else btn.innerText = type === 'trending' ? 'Week' : 'TV Shows'
        setClickedOdd(!clickedOdd);

        if (type === 'trending') dispatch(setDayWeek(!dayOrWeek))
        if (type === 'popular') dispatch(setMovieTvPopular(!movieOrTvPopular))
        if (type === 'toprated') dispatch(setMovieTvToprated(!movieOrTvToprated))
          
    }

  return (
    <div onClick={handleTransition} className='day-week-btn flex items-center cursor-pointer justify-around py-2 relative w-48 rounded-full bg-white text-black' style={{border:'1px solid white'}}>
        <p>{type === 'trending' ? 'Day' : 'Movies'}</p>
        <p>{type === 'trending' ? 'Week' : 'TV Shows'}</p>
        <button ref={btnRef} className='absolute w-24 h-4/5 left-1 rounded-full top-1 text-white' style={{background: "var(--gradient)"}}>{type === 'trending' ? 'Day' : 'Movies'}</button>
    </div>
  )
}

export default DayWeekBtn
