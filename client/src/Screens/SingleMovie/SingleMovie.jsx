import React from 'react'
import Layout from '../../Layout/Layout'
import { useParams } from 'react-router-dom'
import { Movies } from '../../Data/MovieData/MovieData'
import MovieInfo from '../../Components/Single/MovieInfo/MovieInfo'
import MovieCasts from '../../Components/Single/MovieCasts/MovieCasts'
import  MovieRates from '../../Components/Single/MovieRates/MovieRates'
const SingleMovie = () => {
  const {id} = useParams()
  const movie = Movies.find((movie) => movie.name === id)
  return (
    <Layout>
      <MovieInfo movie={movie}/>
      <div className='container mx-auto min-h-screen px-2 my-6'>
        <MovieCasts selectedMovie={movie.name}/>
        <MovieRates movie={movie} selectedMovie={movie.name}/>
      </div>
    </Layout>
  )
}

export default SingleMovie