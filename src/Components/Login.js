import React, { useState } from 'react';
import background from '../Assets/bd3.png'
import { Link } from 'react-router-dom'

function Login() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!input1 || !input2) {
      setError('Both fields are required');
    } else {
      setError('');
      // Your form submission logic here
    }
  }

  return (
    <div style={{ backgroundImage: `url(${background})` }} className='py-[60px] px-7 pb-[90px]'>
        <div className='bg-form_bg rounded-[10px] px-8 pt-5 pb-10 mt-10 text-primary'> 
            <h1 className='font-bold text-xl text-center pt-5 pb-12'>WELCOME BACK</h1>
            <form onSubmit={handleSubmit}>
            <h3 className='font-normal pb-2'>Email</h3>
            <input  type="email" value={input1} onChange={e => setInput1(e.target.value)} placeholder='Enter your email' className='w-full py-[3vh] pl-[1vh]  h-[5vh] mb-4 rounded-[10px] shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] bg-white'/>
            <h3 className='font-normal pb-2'>Password</h3>
            <input  type="password" value={input2} onChange={e => setInput2(e.target.value)} className='w-full py-[3vh] pl-[1vh]  h-[5vh] mb-4 rounded-[10px] shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] bg-white' placeholder='Enter your password' />
            <a className='text-center text-orange flex justify-center font-bold py-5 hover:underline' href='#dd'>Forgot Password?</a>
            {error && <p className='text-center'>{error}</p>}
            <div className='flex justify-between text-sm font-bold'>
            <Link to='signup/'><button className='bg-white rounded-[10px] text-primary px-4 py-2 mt-[2vh] flex items-center shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] '>Create account</button></Link>
                <button type='submit' className='bg-primary rounded-[10px] text-white px-4 py-2 mt-[2vh] flex items-center'>Login Now</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Login;
