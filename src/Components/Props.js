import React from 'react'
import { Equalizer, LegendToggle, LocationOn, Hotel } from '@mui/icons-material'
import '../Stylesheets/Home.css'

function Props({image, type, price, title, location, width, dimensions, description}) {
  return (
    <div className='max-w-[47%] bg-white rounded-[10px] pb-2 mb-6'>
      <div className='flex justify-around absolute pt-[115px] w-[47%]'>
        <h4 className='bg-primary rounded-[10px] px-3 py-[2px]  text-white text-[12px]'>{ type }</h4>
        <h3 className='bg-white text-primary rounded-[10px] px-3 py-[2px] text-[12px]'>${ price }</h3>
      </div>
        <img className='max-w-[45vw]' src={ image } alt="Building" onError={(e)=>{e.target.onerror=null; e.target.src="../Assets/house.png"}} />
        <h3 className='text-[11px] font-bold pt-5 text-center'>{ title }</h3>
        <h3 className='text-[10px] pb-2 font-bold text-center'><LocationOn />{ location }</h3>
        <div className='flex text-[#9A9A9A] justify-between'>
          <h4 className='text-[10px] flex'><Equalizer />{ width } </h4>
          <h4 className='text-[10px] flex'><LegendToggle />{ dimensions }</h4>
          <h4 className='text-[10px] flex'><Hotel />{ description }</h4>
        </div>
        <div className='flex justify-between py-3 px-2'>
            <button className='border-primary border-2 text-[9px] rounded-[10px] w-[48%] py-1 px-[2px]'>Add to wishlist</button>
            <button className='bg-primary text-[9px] text-white rounded-[10px] w-[48%] py-1 px-[2px]' >Book now</button>
        </div>
    </div>
  )
}

export default Props