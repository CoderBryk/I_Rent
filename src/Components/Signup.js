import React from 'react'
import forms from '../Assets/forms.png'
import { Radio } from '@mui/material';
import { Link } from 'react-router-dom';

function Signup() {

  return (
    <div className='flex'>
      <div className='flex-[0]'> 
      <img className='max-h-[120vh] min-w-[40vw]' src={ forms } alt=' a building' />
      </div>
      <div className='px-[15%] py-[5%] bg-[aliceblue] justify-center text-center flex-[1]'>
      <h1 className='font-bold text-primary text-3xl leading-[45px] pb-6 justify-center'>Welcome To IRent</h1>
        <div className='text-left flex flex-col'>
                <h1 className='pb-2'>Name</h1>
                <input type='text' placeholder='Enter your name' className='w-full py-[3vh] pl-[3vh]  h-[5vh] mb-4 rounded-[10px] shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] bg-white'  />
                <h1 className='pt-2 pb-2'>Email</h1>
                <input type='email' placeholder='Enter your email' className='w-full py-[3vh] pl-[3vh]  h-[5vh] mb-4 rounded-[10px] shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] bg-white' />
                <h1 className='pt-2 pb-2'>Password</h1>
                <input type='text' placeholder='Enter your password' className='w-full py-[3vh] pl-[3vh]  h-[5vh] mb-4 rounded-[10px] shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] bg-white'  />
                <h1 className='pt-2 pb-2'>Confirm Password</h1>
                <input type='email' placeholder='Confirm password' className='w-full py-[3vh] pl-[3vh]  h-[5vh] mb-4 rounded-[10px] shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] bg-white' />
                </div>
                <div className='text-primary'>
                <Radio />I have read and accepted Terms and Conditions
                </div>               
                <div className= 'flex pt-[5%]'>
                  <button className='bg-primary rounded-[10px] text-white px-6 py-2 mr-[8%]'>
                    Proceed
                  </button>
                  <button className='bg-white rounded-[10px] text-primary px-6 py-2 shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)]'><Link to='/login'>I already have an account</Link></button>
                </div>
        </div>
    </div>
  )
}

export default Signup;