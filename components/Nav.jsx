import React from 'react';
import Image from 'next/image';
import Logo  from '../public/Logo.png';
import navLink from '@/Data/navData';
const Nav = () => {
  return (
    
    <div className='text-white flex  '>
             <div className='w-[16rem] mt-[2rem] ml-10 mr-[47rem] '>       
                 <Image src={Logo} />  
             </div>
        {navLink.map(({links}) => (
            <div className='flex items-center pt-6'> 
            <div className='flex justify-end'>
                <ul className='flex items-center mr-5 h-full [&_a:hover]:text-grey [&_a]:transition-colors border-r-[1px] border-white-900 pr-5 [&>*:last-child]:border-none '>
                    <li>{links}</li>
                </ul>
             </div>
             </div>
         ))}
       
    </div>
  )
}

export default Nav
