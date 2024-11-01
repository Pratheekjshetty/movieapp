import React from 'react'
import SideBar from '../../SideBar/SideBar'
import Table3 from '../../../../Components/Table3/Table3'
import { UsersData } from '../../../../Data/MovieData/MovieData'

const Users = () => {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
                <h2 className='text-xl font-bold'>Users</h2>
            </div>
            <Table3 data={UsersData} users={true}/>
        </div>
    </SideBar>
  )
}

export default Users