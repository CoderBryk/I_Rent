import React from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import logo from '../Assets/logo.png'
import Avatar from '@mui/material/Avatar';
import Searchbar from './Searchbar'
import { Link }  from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className='h-[50px] lg:h-[60px] bg-primary flex items-center lg:px-8 px-5 justify-between'>
        <div className='flex lg:w-[45%] items-center'>
          <DehazeIcon />
          <Link to='/'><img className='max-w-[90px]' src={logo} alt="brand logo" /></Link>
        </div>
        <div className='bg-searchbg lg:justify-around hidden h-[50px] px-5 py-2 text-white w-full lg:flex lg:w-[45%]'>
          <input className='w-[220px] lg:w-[70%] rounded-[10px]'></input>
          <button className='bg-orange rounded-[10px] px-3 lg:px-5 text-sm font-bold '>List Property</button>
        </div>
        <div className='flex items-center'>
          <NotificationsIcon />
          <MessageIcon />
          <FavoriteIcon />
          <Link to='login/'><Avatar /></Link>
        </div>
      </div>
      <div className='w-full'>
        <Searchbar />
      </div>
    </div>
  )
}

export default Navbar