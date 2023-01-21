import React from 'react'
import forms from '../Assets/forms.png'

function SIgnup1() {
  return (
    <div className='flex'>
      <div className='flex-[0]'> 
        <img className='h-[124vh] min-w-[40vw]' src={ forms } alt=' a building' />
      </div>
      <div>
        <div className='px-[15%] py-[8%] bg-[aliceblue] justify-center text-center flex-[1] min-w-[60vw] h-full'>
          <div className='bg-white text-left px-[10%] pt-[5%] pb-[8%] rounded-lg mb-9'>
          <h1 className='text-center font-bold text-xl pt-3'>Lets get to know you better</h1>
          <h3 className=' font-medium pb-4 pt-[6%]' >Where do you live:</h3>
          <input className='bg-[#ECF3F4] h-[100px] rounded-lg w-full'/>
          <h3 className=' font-medium pb-1  pt-[8%]' >What is your interest in I rent:</h3>
          <h3 className=' font-medium'><input type='radio' className='mr-2'/>I want to sell properties</h3>
          <h3 className=' font-medium'><input type='radio' className='mr-2'/>I want to rent/buy properties</h3>
          <h3 className=' font-medium'><input type='radio' className='mr-2'/>Both</h3>
          <h3 className=' font-medium pb-4 pt-[8%]' >Where do you live:</h3>
          <input className='bg-[#ECF3F4] h-[100px] rounded-lg w-full'/> 
        </div>
        <button className='bg-primary rounded-[10px] text-white px-6 py-2 mr-[8%]'>Sign up</button>
      </div>
      </div>
    </div>
  )
}

export default SIgnup1