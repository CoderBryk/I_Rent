import React from 'react'
import background from '../Assets/bd3.png'

function Signup() {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className='py-[60px] px-7 pb-[90px]'>
        <div className='bg-form_bg rounded-[10px] px-8 pt-5 pb-10 mt-10 text-primary'> 
            <h1 className='font-bold text-xl text-center pt-5 pb-12'>WELCOME BACK</h1>
            <h3 className='font-normal pb-2'>Email</h3>
            <input type='text' placeholder='Enter your email' className='w-full py-[3vh] pl-[1vh]  h-[5vh] mb-4 rounded-[10px] shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] bg-white'/>
            <h3 className='font-normal pb-2'>Password</h3>
            <input type='text' className='w-full py-[3vh] pl-[1vh]  h-[5vh] mb-4 rounded-[10px] shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] bg-white' placeholder='Enter your password' />
            <a className='text-center text-orange flex justify-center font-bold py-5 hover:underline' href='#dd'>Forgot Password?</a>
            <div className='flex justify-between text-sm font-bold'>
                <button className='bg-white rounded-[10px] text-primary px-4 py-2 mt-[2vh] flex items-center shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] '>Create account</button>
                <button className='bg-primary rounded-[10px] text-white px-4 py-2 mt-[2vh] flex items-center'>Login Now</button>
            </div>
        </div>
    </div>
  )
}

export default Signup