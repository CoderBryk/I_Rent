import background from  '../Assets/bd2.png'
import desktop from '../Assets/desktopbg.png'
import React, { useState, useEffect } from 'react';

function Terms() {
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
    <div style={{
      backgroundImage: `url(${isDesktop ? desktop : background })`
    }} className=' py-[60px] lg:px-[10%] px-5 pb-[80px]'>
    <div className='bg-form_bg rounded-[10px] px-8 lg:px-[8%] py-5 lg:py-[6%] mt-10 text-primary'> 
      <h1 className='font-bold text-xl text-center py-5 lg:pb-8 lg:text-[40px]'>TERMS AND CONDITIONS</h1>
            <div>
                <ol className='list-decimal lg:list-none text-sm text-justify'>
                    <li><h3>non convallis. adipiscing Nunc lorem. tincidunt eget hendrerit lorem. tincidunt elit convallis. risus libero, sed ex enim. venenatis orci leo. tincidunt libero, faucibus Nullam sit non. orci non amet, eget tincidunt elementum nec Nunc risus nibh fringilla placerat sapien eu Donec Cras sed ipsum lacus ac ex nec odio lobortis, Nunc dui ipsum tincidunt vel Ut In sollicitudin. varius vehicula, malesuada elit sollicitudin. at, Nunc laoreet at, vehicula, risus leo. viverra eget viverra Nam luctus at, tincidunt Quisque Lorem sit vitae non odio nec hendrerit Sed venenatis nulla, elit. tincidunt Nullam nisi lacus non.</h3></li>
                    <li><h3>non convallis. adipiscing Nunc lorem. tincidunt eget hendrerit lorem. tincidunt elit convallis. risus libero, sed ex enim. venenatis orci leo. tincidunt libero, faucibus Nullam sit non. orci non amet, eget tincidunt elementum nec Nunc risus nibh fringilla placerat sapien eu Donec Cras sed ipsum lacus ac ex nec odio lobortis, Nunc dui ipsum tincidunt vel Ut In sollicitudin. varius vehicula, malesuada elit sollicitudin. at, Nunc laoreet at, vehicula, risus leo.</h3></li>
                    <li><h3>non convallis. adipiscing Nunc lorem. tincidunt eget hendrerit lorem. tincidunt elit convallis. risus libero, sed ex enim. venenatis orci leo. tincidunt libero, faucibus Nullam sit non. orci non amet, eget tincidunt elementum nec Nunc risus nibh fringilla placerat sapien eu Donec Cras sed ipsum lacus ac ex nec odio lobortis, Nunc dui ipsum tincidunt vel Ut In sollicitudin. varius vehicula, malesuada elit sollicitudin.</h3></li>
                    <li className='hidden lg:flex'><h3>non convallis. adipiscing Nunc lorem. tincidunt eget hendrerit lorem. tincidunt elit convallis. risus libero, sed ex enim. venenatis orci leo. tincidunt libero, faucibus Nullam sit non. orci non amet, eget tincidunt elementum nec Nunc risus nibh fringilla placerat sapien eu Donec Cras sed ipsum lacus ac ex nec odio lobortis, Nunc dui ipsum tincidunt vel Ut In sollicitudin. varius vehicula, malesuada elit sollicitudin. at, Nunc laoreet at, vehicula, risus leo. viverra eget viverra Nam luctus at, tincidunt Quisque Lorem sit vitae non odio nec hendrerit Sed venenatis nulla, elit. tincidunt Nullam nisi lacus non. eget scelerisque malesuada Nam non elit tincidunt massa eu non, fringilla tempor tincidunt ex non nec amet, felis, id ex nisl. 
                    </h3></li>
                </ol>
            </div>
            <div className='flex justify-center'>
                <button className='bg-primary rounded-[10px] text-white px-6 py-2 mt-[3vh] flex items-center'>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default Terms