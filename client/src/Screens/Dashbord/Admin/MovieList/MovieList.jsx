import React from 'react'
import SideBar from '../../SideBar/SideBar'
import Table from '../../../../Components/Table/Table'
import { Movies } from '../../../../Data/MovieData/MovieData'


const MovieList = () => {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
                <h2 className='text-xl font-bold'>Movies List</h2>
                <button className='bg-main font-medium transitions hover:bg-red-600 border border-red-600 text-white py-3 px-6 rounded '>Delete All</button>
            </div>
            <Table data={Movies} admin={true}/>
        </div>
    </SideBar>
  )
}

export default MovieList