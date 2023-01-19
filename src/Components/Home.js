import React from 'react'
import background from '../Assets/bgbg.png'
import '../Stylesheets/Home.css'
import HomeProps from './HomeProps'

function Home() {
  return (
    <div>
      <Search />
      <HomeProps />
    </div>
  )
}

export default Home

function Search() {
  return(
    <div className='home w-full'>
      <div className='pt-[80px] lg:pt-[2%]  flex'>
        <div className='absolute'>
          <h1 className='text-white items-center justify-center px-[25%] text-2xl font-bold lg:text-[60px] lg:leading-[80px] pt-[1%] lg:pt-[6%] text-center'>LETS FIND THE PERFECT HOUSE FOR YOU</h1>
          <div className='searchbar'>

          </div>
        </div>
        <img className='ml-[40.3%] lg:ml-[43.3vw] max-w-[60%] lg:max-w-[56%] justify-end float-right' src={ background } alt=' a building' />
      </div>
    </div>
  )
}