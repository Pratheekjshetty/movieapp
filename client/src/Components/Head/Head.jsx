import React from 'react'
import head from '../../Assets/About.jpg'

const Head = ({title}) => {
  return (
    <div className='w-full bg-deepGray lg:h-64 h-40 relative overflow-hidden rounded-md'>
        <img src={head} alt="aboutus" className='w-full h-full object-cover' style={{ opacity: 0.6 }}/>
        <div className='absolute lg:top-24 top-16 w-full flex-colo'>
            <h1 className='text-2xl xl:text-4xl lg:text-3xl text-white text-center font-bold'>
               {title}
            </h1>
        </div>
    </div>
  )
}

export default Head