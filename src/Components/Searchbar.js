import React from 'react'
import { Link } from 'react-router-dom'

function Searchbar() {
  return (
    <div className='bg-searchbg h-[50px] flex px-5 py-2 justify-between text-white absolute w-full lg:hidden'>
        <input className='w-[220px] rounded-[10px]'></input>
        <Link to='properties/'><button className='bg-orange rounded-[10px] px-3 text-sm font-bold'>List Property</button></Link>
    </div>
  )
}

export default Searchbar