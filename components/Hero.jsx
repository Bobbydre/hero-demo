import React from 'react';
import Nav from './Nav';
// import heroData from '../../data'

const Hero = ({heading, message}) => {
 
  return (
    <div className='relative flex items-start flex-col gap-2 h-[100px] z-20 fullscreen '>
      <div className='absolute left-[135px] top-[300px] leading-[2rem]'>
        <p className='text-[#FFF509] uppercase'>{heading}</p>
        <h2 className='text-5xl font-bold text-white text-[70px] w-full'>{message}</h2>
        <p className='text-[#4C4C4C] uppercase'>Holders will get - Monthly passive income from the Arete <br />Alpha web3 education brand.</p>
        <div>
            <button className='text-white' >CTA1</button>
            <button className='text-white' >CTA2</button> 
        </div>
      </div>
    </div>
  )
}

export default Hero
