import React, { useEffect } from 'react'
import Layout from '../../Layout/Layout'
import { useParams } from 'react-router-dom'
import { Movies, PopulerMovie } from '../../Data/MovieData/MovieData'
import MovieInfo from '../../Components/Single/MovieInfo/MovieInfo'
import MovieCasts from '../../Components/Single/MovieCasts/MovieCasts'
import  MovieRates from '../../Components/Single/MovieRates/MovieRates'
import Titles from '../../Components/Titles/Titles'
import { BsCollectionFill } from 'react-icons/bs'
import Movie from '../../Components/Movie/Movie'

const SingleMovie = () => {
  const {id} = useParams()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const movie = Movies.find((movie) => movie.name === id);
  const RelatedMovies = PopulerMovie.filter((m)=>m.category===movie.category)
  return (
    <Layout>
      <MovieInfo movie={movie}/>
      <div className='container mx-auto min-h-screen px-2 my-6'>
        {/* Movie Casts */}
        <MovieCasts selectedMovie={movie.name}/>
        {/* Movie Rating */}
        <MovieRates movie={movie} selectedMovie={movie.name}/>
        {/* Movie Related */}
        <div className='my-16'>
          <Titles title="Related Movies" Icon={BsCollectionFill}/>
          <div className='grid sm:mt-10 mt-6 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
          {
            RelatedMovies.map((movie,index)=>(
              <Movie key={index} movie={movie}/>
            ))
          }
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default SingleMovie