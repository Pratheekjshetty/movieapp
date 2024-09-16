import React from 'react'
import Layout from '../../Layout/Layout'
import Banner from '../../Components/Home/Banner/Banner'
import PopulerMovies from '../../Components/Home/PopulerMovies/PopulerMovies'
import Promos from '../../Components/Home/Promos/Promos'
import TopRated from '../../Components/Home/TopRated/TopRated'

const HomeScreen = () => {
  return (
    <Layout>
      <div className='container mx-auto min-h-screen px-2 mb-6'>
        <Banner/>
        <PopulerMovies/>
        <Promos/>
        <TopRated/>
      </div>
    </Layout>
  )
}

export default HomeScreen