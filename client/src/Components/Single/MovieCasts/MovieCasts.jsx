import React from 'react'
import {FaUserFriends} from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import Titles from '../../Titles/Titles'
import {UsersData} from '../../../Data/MovieData/MovieData'
import 'swiper/swiper-bundle.css';

const MovieCasts = ({ selectedMovie }) => {
  const movieCasts = UsersData.find(movie => movie.movie === selectedMovie)?.cast || [];
  return (
    <div className='my-12'>
      <Titles title={`${selectedMovie} Casts`} Icon={FaUserFriends}/>
      <div className='mt-10'>
        <Swiper spaceBetween={10} 
        autoplay={{delay:1000, disableOnInteraction: false}} 
        speed={1000} loop={true} modules={[Autoplay]} 
        breakpoints={{
          0:{
            slidesPerView:1,
          },
          400:{
            slidesPerView:2,
          },
          768:{
            slidesPerView:3,
          },
          1024:{
            slidesPerView:4,
          },
          1280:{
            slidesPerView:5,
          },
          1590:{ 
            slidesPerView:6, 
          },
        }}>
          {
            movieCasts.map((user,index)=>(
              <SwiperSlide key={index}>
                <div className='w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800'>
                  <img src={user.image} alt={user.name} className='w-full h-64 object-cover rounded mb-4'/>
                  <p>{user?.name}</p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default MovieCasts