import React from 'react'
import NavBar from '../Layout/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'

const Layout = ({children}) => {
  return (
    <>
      <div className='bg-main text-white'>
        <NavBar/>
        {children}
        <Footer/>
      </div>
    </>
  )
}

export default Layout