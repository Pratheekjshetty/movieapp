import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import Filters from '../../Components/Filters/Filters'
import Movie from '../../Components/Movie/Movie'
import {PopulerMovie} from '../../Data/MovieData/MovieData'
import {CgSpinner} from 'react-icons/cg'

const MoviesPage = () => {
  const maxPage = 8
  const [page,setPage] = useState(maxPage)
  const HandleLoadingMore = () =>{
    setPage(page + maxPage)
  }
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Filters/> 
        <p className='text-lg font-medium my-6'>
          Total <span className='font-bold text-subMain'>{PopulerMovie?.length}</span>{' '} items Found
        </p>
        <div className='grid sm:mt-10 mt-6 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
          {
            PopulerMovie.slice(0,page)?.map((movie,index)=>(
              <Movie key={index} movie={movie}/>
            ))
          }
        </div> 
        {/* Loading More */}
        <div className='w-full flex-colo md:my-20 my-10'>
          <button onClick={HandleLoadingMore} className='flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain'>
            Loading More <CgSpinner className="animate-spin"/>
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default MoviesPage