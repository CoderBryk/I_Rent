import React from 'react'
import house from '../Assets/home.png'
import backdrop from '../Assets/desktopbg.png'
import { Link } from 'react-router-dom'

function Properties() {
  return (
    <div  style={{ backgroundImage: `url(${backdrop})` }}  className='bg-[aliceblue] px-[8%] py-[5%] flex justify-center'>
        <div className='bg-white rounded-[20px] w-full px-[3%] py-[2%]'>
            <h1 className='text-right text-3xl text-primary font-bold' >Step 1 of 2</h1>
            <div className='text-center py-[5%] align-middle'>
                <h1 className='font-bold text-3xl text-primary'>Rent Out Your Property, Earn Money</h1>
                <h3 className='leading-6 pt-1 pb-6 text-primary'>Input property details below so we can find a tenant</h3>
                <div className='pt-4 pb-12'>
                    <input type='text' placeholder='Title' className=' py-2 px-3 rounded-[10px] shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] bg-white mr-4 border border-[#0000004f] w-[36%]' />
                    <input type='text' placeholder='State' className=' py-2 px-3 rounded-[10px] shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] bg-white mr-4 border border-[#0000004f] w-[26%]' />
                    <input type='text' placeholder='L.G.A' className=' py-2 px-3 rounded-[10px] shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] bg-white mr-4 border border-[#0000004f] w-[26%]' />
                </div>
                <h1 className='font-bold text-3xl text-primary'>Add Photos</h1>
                <h3 className='leading-6 pt-1 pb-8 text-primary'>Upload at least 5 pictures, only one video allowed per post</h3>
                <div className='flex items-center justify-center'>
                    {/* carousel */}
                    <img className='mr-5' src={house} alt='house'/>
                    <img className='mr-5' src={house} alt='house' />
                    <img className='mr-5' src={house} alt='house' />
                    <img className='mr-5' src={house} alt='house'/>
                    <button className='bg-primary rounded-[20px] text-white text-7xl h-[131px] w-[133px]'>+</button>
                </div>
                <h3 className='leading-6 py-3 text-[#FF0000]' >Pictures must be less than 5mb</h3>
                <Link to = '/list_property'>'<button className='bg-primary rounded-[10px] text-white px-6 py-2 mt-8 mb-4'>Proceed</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Properties