import React from 'react'
import Titles from '../../Titles/Titles'
import {BsCollectionFill} from 'react-icons/bs'
import {PopulerMovie} from '../../../Data/MovieData/MovieData'
import Movie from '../../Movie/Movie'

const PopulerMovies = () => {
  return (
    <div className='my-16'>
      <Titles title="Populer Movies" Icon={BsCollectionFill}/>
      <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {PopulerMovie.slice(0,8).map((movie,index)=>(
            <Movie key={index} movie={movie}/>
          ))
        }
      </div>
    </div>
  )
}

export default PopulerMovies