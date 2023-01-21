import React from 'react'
import backdrop from '../Assets/desktopbg.png'

function Properties2() {
  return (
    <div  style={{ backgroundImage: `url(${backdrop})` }} className='px-[8%] py-[5%] flex justify-center'>
        <div className='bg-[aliceblue] rounded-[20px] w-[88%] px-[3%] py-[2%]'>
            <h1 className='text-right text-3xl text-primary font-bold' >Step 2 of 2</h1>
                <div className='text-center py-[2%] align-left px-[10%]'>
                    <h1 className='font-bold text-3xl text-primary pb-10'>More Details</h1>
                    <div className="flex flex-wrap justify-between">
                    <input type='text'className=' py-2 px-3 rounded-[10px] shadow [1px 4px 68px -15px rgba(0, 0, 0, 0.25)] bg-white mr-4 border border-[#0000004f] w-[47%] my-5 mr-[2%]'  placeholder="Address"/>
                    <input type='text'className=' py-2 px-3 rounded-[10px] shadow [1px 4px 68px -15px rgba(0, 0, 0, 0.25)] bg-white mr-4 border border-[#0000004f] w-[47%] my-5 ' placeholder="Estate  Name" />
                    <input type='text'className=' py-2 px-3 rounded-[10px] shadow [1px 4px 68px -15px rgba(0, 0, 0, 0.25)] bg-white mr-4 border border-[#0000004f] w-[47%] my-5 mr-[2%] '  placeholder="Size (sq feet)"/>
                    <input type='text'className=' py-2 px-3 rounded-[10px] shadow [1px 4px 68px -15px rgba(0, 0, 0, 0.25)] bg-white mr-4 border border-[#0000004f] w-[47%]  my-5' placeholder="Category"/>
                    <input type='text'className=' py-2 px-3 rounded-[10px] shadow [1px 4px 68px -15px rgba(0, 0, 0, 0.25)] bg-white mr-4 border border-[#0000004f] w-[47%] my-5  mr-[2%] ' placeholder="Furnishing " />
                    <input type='text'className=' py-2 px-3 rounded-[10px] shadow [1px 4px 68px -15px rgba(0, 0, 0, 0.25)] bg-white mr-4 border border-[#0000004f] w-[47%]  my-5 ' placeholder="Bedrooms" />
                    <input type='text'className=' py-2 px-3 rounded-[10px] shadow [1px 4px 68px -15px rgba(0, 0, 0, 0.25)] bg-white mr-4 border border-[#0000004f] w-[47%]  my-5 mr-[2%] ' placeholder="Bathrooms" />
                    <input type='text'className=' py-2 px-3 rounded-[10px] shadow [1px 4px 68px -15px rgba(0, 0, 0, 0.25)] bg-white mr-4 border border-[#0000004f] w-[47%] my-5  ' placeholder="Living Rooms" />
                    </div>
                    <h3 className='leading-6 pt-4 pb-3 text-primary text-left font-bold text-2xl'>Description</h3>
                    <input type='text'className=' py-2 px-3 rounded-[10px] shadow [1px 4px 68px -15px rgba(0, 0, 0, 0.25)] bg-white mr-4 border border-[#0000004f] w-[98%] h-[300px]' />
                <button className='bg-primary rounded-[10px] text-white px-6 py-2 mt-[3vh]'>Publish</button>
                </div>
        </div>
    </div>
  )
}

export default Properties2