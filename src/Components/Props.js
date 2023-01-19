import React from 'react'
import { LocationOn } from '@mui/icons-material'

function Props({image, type, price, title, location}) {
  return (
    <div className='max-w-[48%]'>
        <div>{ image }</div>
        <div className='absolute justify-between'>
            <h4>{ type }</h4>
            <h4>${ price }</h4>
        </div>
        <h3>{ title }</h3>
        <h3><LocationOn />{ location }</h3>
        <div>
            <button>Add to wishlist</button>
            <button>Book now</button>
        </div>
    </div>
  )
}

export default Props