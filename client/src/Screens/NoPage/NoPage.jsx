import React from 'react'
import nopage from '../../Assets/Nopage.jpg'
import { Link } from 'react-router-dom'
import {BiHomeAlt} from 'react-icons/bi'
const NoPage = () => {
  return (
    <div className='flex-colo gap-6 w-full min-h-screen text-white bg-regalblue lg:py-20 py-10 px-6'>
      <Link to='/'>
        <img className='w-full h-96 object-contain' src={nopage} alt="not found"/>
      </Link>
      <h1 className='lg:text-4xl font-bold'>Page Not Found</h1>
      <p className='font-medium text-border italic leading-6'>
        The page you are looking for does not exist.You may mistyped the URL
      </p>
      <Link to='/' className='bg-subMain transitions text-white flex-rows gap-4 font-medium py-3 px-6 hover:text-main rounded-md'>
        <BiHomeAlt/>Back Home
      </Link>
    </div>
  )
}

export default NoPage