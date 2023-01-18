import React from 'react'
import logo from '../Assets/logo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link }  from "react-router-dom";
 
function Footer() {
  return (
    <div className='bg-primary text-white px-3 py-5' >
    <div className='flex justify-between text-xs'>
        <div className='max-w-[28%]'>
            <Link to='/'><img className='max-w-[70px]' src={logo} alt="brand logo" /></Link>
            <h3 className='text-links'>At IRent we will get you the best house to suit you<span classname ='hidden'>r preferences, location and requirements. Choose IRent, choose quality.</span></h3>
        </div>
        <div className='w-[37%]'>
            <ul className='text-links'>
                <li className='text-sm font-bold text-white'>Quick Links</li>
                <li>Properties</li>
                <Link to='terms_and_conditions/'><li>Terms and Conditions</li></Link>
                <Link to='privacy_policy/'><li>Privacy Policy</li></Link>
                <Link to='contact_us/'><li>Contact Us</li></Link>
            </ul>
        </div>
        <div className='w-[33%]'>
            <ul className='text-links'>
                <li className='text-sm font-bold text-white'>Contact Us</li>
                <li><a href='https://goo.gl/maps/EMqWXYymeAekWmyt7' alt='link to map' target='_blank' rel='noreferrer'><LocationOnIcon />34, Nwaniba Uyo</a></li>
                <li><a href='https://mail.google.com/mail/u/0/#inbox' target='_blank' rel='noreferrer'><MailIcon />irent@gmail.com</a></li>
                <li><a href='tel:+2347033333333' target='_blank' rel='noreferrer'  ><PhoneIcon />+2347033333333</a></li>
            </ul>
        </div>
    </div>
     <div className='flex items-center justify-between pt-5'>
        <div className='items-center flex'>
            <input placeholder=' Enter your email' className='w-[150px] px-2 h-[35px] rounded-l-[10px] text-f_orange' />
            <button type='submit' className='bg-f_orange rounded-r-[10px] px-3 h-[35px] items-center text-sm font-bold'>Subscribe</button>
        </div>
        <div>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'  alt='twitter icon'><TwitterIcon /></a>
            <a href='https://instagram.com' target='_blank' rel='noreferrer'  alt='instagram icon'><InstagramIcon /></a>
            <a href='https://facebook.com' target='_blank' rel='noreferrer' alt='facebook icon'><FacebookIcon /></a>
        </div>
     </div>   
    </div>
  )
}

export default Footer 