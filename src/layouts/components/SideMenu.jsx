import React from 'react'
import { NavLink } from 'react-router-dom'

function SideMenu() {
  return (
    <div className='w-1/6 h-[100%] bg-green-100'>
      <div className='my-1 w-[100%] p-3 bg-zinc-300 hover:bg-gray-200 ' to="/"><NavLink>Dashboard</NavLink></div>
      <div className='my-1 w-[100%] p-3 bg-zinc-300 hover:bg-gray-200' to='/team'><NavLink>Team</NavLink></div>
    </div>
  )
}

export default SideMenu