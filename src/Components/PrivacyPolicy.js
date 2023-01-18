import React from 'react'
import background from '../Assets/bd2.png'

function PrivacyPolicy() {
  return(
    <div style={{ backgroundImage: `url(${background})` }} className='py-[60px] px-5 pb-[80px]'>
    <div className='bg-form_bg rounded-t-[10px] px-8 py-5 mt-10 text-primary'> 
      <h1 className='font-bold text-xl text-center py-5'>PRIVACY POLICY</h1>
      <div>
        <ol className='list-decimal text-justify'>
          <li>non convallis. adipiscing Nunc lorem. tincidunt eget hendrerit lorem. tincidunt elit convallis. risus libero, sed ex enim. venenatis orci leo. tincidunt libero, faucibus Nullam sit non. orci non amet, eget tincidunt elementum nec Nunc risus nibh fringilla placerat sapien eu Donec Cras sed ipsum lacus ac ex nec odio lobortis, Nunc dui ipsum tincidunt vel Ut In sollicitudin.<span className='hidden lg:flex'> varius vehicula, malesuada elit sollicitudin. at, Nunc laoreet at, vehicula, risus leo. viverra eget viverra Nam luctus at, tincidunt Quisque Lorem sit vitae non odio nec hendrerit Sed venenatis nulla, elit. tincidunt Nullam nisi lacus non. eget scelerisque malesuada Nam non elit tincidunt massa eu non, fringilla tempor tincidunt ex non nec amet, felis, id ex nisl. tincidunt ex placerat.</span></li>
          <li>tincidunt elit convallis. risus libero, sed ex enim. venenatis orci leo. tincidunt libero, faucibus Nullam sit non. orci non amet, eget tincidunt elementum nec Nunc risus nibh fringilla placerat sapien eu Donec Cras sed ipsum lacus ac ex nec odio lobortis, Nunc dui ipsum tincidunt vel Ut In sollicitudin. varius vehicula, malesuada elit sollicitudin.<span className='hidden lg:flex'> at, Nunc laoreet at, vehicula, risus leo. viverra eget viverra Nam luctus at, tincidunt Quisque Lorem sit vitae non odio nec hendrerit Sed venenatis nulla, elit. tincidunt Nullam nisi lacus non. eget scelerisque malesuada Nam non elit tincidunt massa eu non, fringilla tempor tincidunt ex non nec amet, felis, id ex nisl. tincidunt ex placerat</span></li>
          <li>adipiscing Nunc lorem. tincidunt eget hendrerit lorem. tincidunt elit convallis. risus libero, sed ex enim. venenatis orci leo. tincidunt libero, faucibus Nullam sit non. orci non amet, eget tincidunt elementum nec Nunc risus nibh fringilla placerat sapien eu Donec Cras sed ipsum lacus ac ex nec odio lobortis, Nunc dui ipsum tincidunt vel Ut In sollicitudin.<span className='hidden lg:flex'> varius vehicula, malesuada elit sollicitudin. at, Nunc laoreet at, vehicula, risus leo. viverra eget viverra Nam luctus at, tincidunt Quisque Lorem sit vitae non odio nec hendrerit Sed venenatis nulla, elit. tincidunt Nullam nisi lacus non. eget scelerisque malesuada Nam non elit tincidunt massa eu non, fringilla tempor tincidunt ex non nec amet, felis, id ex nisl. tincidunt ex placerat</span></li>
        </ol>
      </div>
      <div className='flex justify-center'>
        <button className='bg-primary rounded-[10px] text-white px-6 py-2 mt-[3vh] flex items-center'>Continue</button>
      </div>
    </div>
  </div>
  )
}

export default PrivacyPolicy