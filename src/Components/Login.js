import React, { useState, useEffect } from 'react';
import forms from '../Assets/forms.png'
import { Link } from 'react-router-dom';
import background from  '../Assets/bd3.png'

function Signup() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className='flex'>
      <div className='hidden lg:flex flex-[0]'> 
      <img className='max-h-[120vh] min-w-[40vw]' src={ forms } alt=' a building' />
      </div>
      <div  style={{
        backgroundImage: `url(${isDesktop ? 'aliceblue' : background })`
      }}  className='px-[7%] lg:px-[15%] pt-[80px] lg:pt-0 pb-[8%] bg-[aliceblue] justify-center text-center flex-[1]'>
      <div className=' bg-[aliceblue] lg:bg-none px-6 pb-9 rounded-[18px] lg;rounded-0'>
      <h1 className='font-bold text-primary text-xl lg:text-3xl leading-[45px] pt-5 pb-6 justify-center'>Welcome Back</h1>
        <div className='text-left flex flex-col'>
                <h1 className='pt-2 pb-2'>Email</h1>
                <input type='email' placeholder='Enter your email' className='w-full py-[3vh]  pl-[1.5vw] lg:pl-[3vh]  h-[5vh] mb-4 rounded-[10px] shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] bg-white' />
                <h1 className='pt-2 pb-2'>Password</h1>
                <input type='text' placeholder='Enter your password' className='w-full py-[3vh]  pl-[1.5vw] lg:pl-[3vh]  h-[5vh] mb-4 rounded-[10px] shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] bg-white'  />
                </div>      
                <h3 className='text-sm text-orange py-3'>Forgot password?</h3>
                <div className= 'flex pt-[5%] justify-around mb-5 '>
                  <Link to='/login/signup'><button className='bg-primary rounded-[10px] text-white px-5 py-2 text-[12px]'>
                    Create Account
                  </button></Link>
                  <button className='bg-white rounded-[10px] text-primary px-8  text-[12px] py-2 shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)]'><Link to='/login'>Login Now</Link></button>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Signup;