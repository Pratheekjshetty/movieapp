import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import {Movies} from '../../../Data/MovieData/MovieData'

const Banner = () => {
  return (
    <div className='relative w-full'>
      <Swiper direction="vertical" spaceBetween={0} slidesPerView={1} loop={true} speed={1000} 
      modules={[Autoplay]} autoplay={{delay: 4000, disableOnInteraction: false}} className='w-full xl:h-96 bg-dry lg:h-64 h-48'>
        {Movies.slice(0,6).map((movie,index) =>(
            <SwiperSlide key={index} className='relative rounded overflow-hidden'>
              <img src={`${movie.image}`} alt={movie.name} className='w-full h-full object-cover'/>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default Banner