import React from 'react'
import Props from './Props'
import house from '../Assets/house.png'

function HomeProps() {
  return (
    <div>
        <div className='bg-[#dff4ff59] justify-between'>
            <div className='flex justify-between items-center pt-[5%] pb-[5%] lg:pb-7 px-[5%]'>
                <h1 className='text-base lg:text-3xl font-bold'>Top Liked Houses</h1>
                <h3 className='text-sm lg:text-xl font-semibold'>Load More</h3>
            </div>
            <div className='flex flex-wrap lg:flex-nowrap lg:justify-between justify-evenly lg:px-[6%]'>
                <Props image={ house } type='Duplex' price='500' title='Fully Furnished Duplex for Sale' location='Town campus, Uyo' width='500m' dimensions='10x10m' description='4 bedroom'  />
                <Props image={ house } type='Duplex' price='500' title='Fully Furnished Duplex for Sale' location='Town campus, Uyo' width='500m' dimensions='10x10m' description='4 bedroom'  />
                <Props image={ house } type='Duplex' price='500' title='Fully Furnished Duplex for Sale' location='Town campus, Uyo' width='500m' dimensions='10x10m' description='4 bedroom'  />
                <Props image={ house } type='Duplex' price='500' title='Fully Furnished Duplex for Sale' location='Town campus, Uyo' width='500m' dimensions='10x10m' description='4 bedroom'  />
            </div>
        </div>
        <div className='blue'>
        <div className='flex justify-between items-center pt-[5%] pb-[5%] px-[5%]'>
        <h1 className='text-base lg:text-3xl font-bold'>Hot self contains 🔥</h1>
        <h3 className='text-sm lg:text-xl font-semibold'>Load More</h3>
        </div>
        <div className='flex flex-wrap justify-evenly'>
        <Props image={ house } type='Duplex' price='500' title='Fully Furnished Duplex for Sale' location='Town campus, Uyo' width='500m' dimensions='10x10m' description='4 bedroom'  />
        <Props image={ house } type='Duplex' price='500' title='Fully Furnished Duplex for Sale' location='Town campus, Uyo' width='500m' dimensions='10x10m' description='4 bedroom'  />
        <Props image={ house } type='Duplex' price='500' title='Fully Furnished Duplex for Sale' location='Town campus, Uyo' width='500m' dimensions='10x10m' description='4 bedroom'  />
        <Props image={ house } type='Duplex' price='500' title='Fully Furnished Duplex for Sale' location='Town campus, Uyo' width='500m' dimensions='10x10m' description='4 bedroom'  />
    </div>
    </div>
    <div className='bg-[#dff4ff59] justify-between'>
            <div className='flex justify-between items-center pt-[5%] pb-[5%] px-[5%]'>
                <h1 className='text-base lg:text-3xl font-bold'>Single rooms</h1>
                <h3 className='text-sm lg:text-xl font-semibold'>Load More</h3>
            </div>
            <div className='flex flex-wrap justify-evenly'>
                <Props image={ house } type='Duplex' price='500' title='Fully Furnished Duplex for Sale' location='Town campus, Uyo' width='500m' dimensions='10x10m' description='4 bedroom'  />
                <Props image={ house } type='Duplex' price='500' title='Fully Furnished Duplex for Sale' location='Town campus, Uyo' width='500m' dimensions='10x10m' description='4 bedroom'  />
                <Props image={ house } type='Duplex' price='500' title='Fully Furnished Duplex for Sale' location='Town campus, Uyo' width='500m' dimensions='10x10m' description='4 bedroom'  />
                <Props image={ house } type='Duplex' price='500' title='Fully Furnished Duplex for Sale' location='Town campus, Uyo' width='500m' dimensions='10x10m' description='4 bedroom'  />
            </div>
        </div>
    </div>
  )
}

export default HomeProps