import React from 'react'
import background from '../Assets/bd1.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className='py-[60px] px-5 pb-[80px]'>
        <div className='bg-form_bg rounded-t-[10px] px-8 py-5 mt-10 text-primary'> 
            <h1 className='font-bold text-xl text-center py-5'>CONTACT US</h1>
            <h3 className='font-normal pb-2'>Name</h3>
            <input type='text' placeholder='Enter your name' className='w-full py-[3vh] pl-[1vh]  h-[5vh] mb-4 rounded-[10px] shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] bg-white'/>
            <h3 className='font-normal pb-2'>Email</h3>
            <input type='text' className='w-full py-[3vh] pl-[1vh]  h-[5vh] mb-4 rounded-[10px] shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] bg-white' placeholder='Enter your email' />
            <input placeholder='Write your message or feedback' className='w-full pt-5 pb-[20vh] pl-[1vh] mt-4 rounded-[10px] shadow [1px 4px 54px 13px rgba(0, 0, 0, 0.08)] bg-white' /><br />
            <div className='flex justify-center'>
                <button className='bg-primary rounded-[10px] text-white px-6 py-2 mt-[3vh] flex items-center'>Submit</button>
            </div>
            
        </div>
        <div className='bg-primary text-white rounded-b-[10px] pb-5'>
            <h1 className='font-bold text-xl text-center py-5'>Contact infomation</h1>
            <div className='px-2'>
                <ul className='text-sm flex flex-wrap justify-center'>
                    <li className='px-1'><h3><LocationOnIcon />34, Nwaniba Uyo</h3></li>
                    <li className='px-1'><h3><MailIcon />irent@gmail.com</h3></li>
                    <li className='px-1 py-4'><h3><PhoneIcon />+2347896743888</h3></li>
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Contact