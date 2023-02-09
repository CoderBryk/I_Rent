import React from 'react'
import shortf from '../assets/shortf.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='flex'>
        <div className='flex-[0.4]'> 
            <img className='max-h-[80vh] min-w-[40vw]' src={ shortf } alt=' a building' />
        </div>
        <div className='px-[15%] py-[8%] bg-[aliceblue] flex-[0.6]'>
        <h1 className='font-bold text-primary text-3xl leading-[45px] pb-6 justify-center'>Welcome Back</h1>
            <h1 className='pt-2 pb-2'>Email</h1>
            <input type='email' placeholder='Enter your email' className='w-full py-[3vh] pl-[3vh]  h-[5vh] mb-4 rounded-[10px] shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] bg-white' />
            <h1 className='pt-2 pb-2'>Password</h1>
            <input type='text' placeholder='Enter your password' className='w-full py-[3vh] pl-[3vh]  h-[5vh] mb-4 rounded-[10px] shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] bg-white'  />
            <div className= 'flex pt-[7%]'>
              <button className='bg-primary rounded-[10px] text-white px-6 py-2 mr-[8%]'>Login in now</button>
              <button className='bg-white rounded-[10px] text-primary px-6 py-2 shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)]'><Link to='/signup'>Create acount</Link></button>
        </div>
        </div>

    </div>
  )
}

export default Login