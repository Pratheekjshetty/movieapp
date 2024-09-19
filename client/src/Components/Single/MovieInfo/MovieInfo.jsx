import React from 'react'

const MovieInfo = ({movie}) => {
  return (
    <div className='w-full xl:h-screen relative text-white'>
      <img src={`${movie.image}`} alt={movie.name} className='w-full h-full'/>
    </div>
  )
}

export default MovieInfo