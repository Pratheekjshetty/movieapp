import React from 'react'
import Layout from '../../Layout/Layout'
import { useParams } from 'react-router-dom'
import { Movies } from '../../Data/MovieData/MovieData'
import MovieInfo from '../../Components/Single/MovieInfo/MovieInfo'

const SingleMovie = () => {
  const {id} = useParams()
  const movie = Movies.find((movie) => movie.name === id)
  return (
    <Layout>
      <MovieInfo movie={movie}/>
    </Layout>
  )
}

export default SingleMovie