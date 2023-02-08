import React from 'react'
import { Equalizer, LegendToggle, LocationOn, Hotel } from '@mui/icons-material'
import '../Stylesheets/Home.css'

function Props({image, type, price, title, location, width, dimensions, description}) {
  return (
    <div className='max-w-[47%] lg:w-[23%] bg-white rounded-[10px] pb-2 mb-6 shadow-xl'>
      <div className='flex lg:justify-between text-[12px] lg:text-[15px] lg:pl-[2%] lg:pr-[6%] justify-around absolute pt-[130px] lg:pt-[160px] w-[47%] lg:items-left'>
        <h4 className='bg-primary rounded-[9px] px-3 py-[2px] text-white '>{ type }</h4>
        <h3 className='bg-white text-primary rounded-[9px] px-3 py-[2px]'>${ price }</h3>
      </div>
        <img className='max-w-full lg:w-full' src={ image } alt="Building" onError={(e)=>{e.target.onerror=null; e.target.src="../Assets/house.png"}} />
        <h3 className='text-[11px] lg:text-base font-bold pt-5 text-center'>{ title }</h3>
        <h3 className='text-[10px] lg:text-sm pb-2 font-bold text-center'><LocationOn />{ location }</h3>
        <div className='flex text-[rgb(154,154,154)] justify-between px-3 lg:px-8'>
          <h4 className='text-[10px] lg:text-xs flex'><Equalizer />{ width } </h4>
          <h4 className='text-[10px] lg:text-xs flex'><LegendToggle />{ dimensions }</h4>
          <h4 className='text-[10px] lg:text-xs flex'><Hotel />{ description }</h4>
        </div>
        <div className='flex justify-between py-3 px-2 '>
            <button className='border-primary border-2 text-[9px] lg:text-[12px] rounded-[10px] w-[48%] py-1 px-[2px]'>Add to wishlist</button>
            <button className='bg-primary text-[9px] lg:text-[12px]  text-white rounded-[10px] w-[48%] py-1 px-[2px]' >Book now</button>
        </div>
    </div>
  )
}

export default Props