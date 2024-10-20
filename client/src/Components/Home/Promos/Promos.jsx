import React from 'react'
import {FiUser} from 'react-icons/fi'
import mobile from '../../../Assets/mobile.png'
import mobile1 from '../../../Assets/mobile1.png'

const Promos = () => {
  return (
    <div className='my-20 py-10 md:px-20 px-8 bg-dry'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
        <div className='flex lg:gap-10 gap-6 flex-col'>
          <h1 className='xl:text-2xl text-xl capitalize font-sans font-medium xl:leading-relaxed'>
            Download your Movies & Watch Offline. <br/> Enjoy on Your Mobile
          </h1>
          <p className='text-text text-sm xl:text-base leading-6 xl:leading-8'>
            The Flickster Movie Streaming app lets you explore a vast library of films, from timeless classics to the latest blockbusters. One of its key features is the ability to download movies for offline viewing, making it easy to watch anywhere, whether on a flight or during your commute. The user-friendly interface allows for seamless browsing, and personalized recommendations help you find new favorites.
            You can create and manage watchlists, ensuring you never miss a film that catches your eye. Flickster also offers exclusive behind-the-scenes content and trailers, adding depth to your viewing experience. With options for subtitles and high-quality streaming, it’s tailored to your preferences. Join a community of movie lovers to share reviews and recommendations. With Flickster, your movie nights are just a click away!
          </p>
          <div className='flex gap-4 md:text-lg text-sm'>
            <div className='flex-colo bg-black text-subMain px-6 py-3 rounded-md font-bold'>
              HD 4K
            </div>
            <div className='flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded-md font-bold'>
              <FiUser/> 2K
            </div>
          </div>
        </div>
        <div className='flex gap-10 mx-5 my-10'>
          <img src={mobile} alt='Mobile app' className='w-20 xl:w-60 lg:w-50 md:w-40 sm:w-30 xs:w-25 object-contain'/>
          <img src={mobile1} alt='Mobile app' className='w-20 xl:w-60 lg:w-50 md:w-40 sm:w-30 xs:w-25 object-contain'/>
        </div>
      </div>
    </div>
  )
}

export default Promos