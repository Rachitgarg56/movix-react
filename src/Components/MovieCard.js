import React from 'react'

const MovieCard = ( { genre, movieName, rating, releaseDate, poster, showRating } ) => {
  console.log(movieName,releaseDate,poster);
  return (
    <div className='card flex flex-col gap-7 w-60 justify-self-center'>
        <figure className='w-full h-80 relative'>
            <img className='w-full h-full object-cover rounded-2xl' alt='movie-card-img' src={`https://image.tmdb.org/t/p/original${poster}`} />
            {!showRating && <div className='rating absolute -bottom-6 left-4 rounded-full bg-white p-3 text-black'>{rating}</div>}
        </figure>
        <div className='flex flex-col gap-1'>
            <div className='movie-name text-xl'>{movieName}</div>
            <div className='release-date text-gray-400 text-sm'>{releaseDate}</div>
        </div>
    </div>
  )
}

export default MovieCard
