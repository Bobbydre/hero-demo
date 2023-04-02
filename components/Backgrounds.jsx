import React from 'react';
import Image from 'next/image';

const Backgrounds = () => {
  return (
    <div className='relative'>
        <div className='absolute left-[400px] top-[-420px] z-10'>
            <Image src='/Globe.svg' width= '500' height= '500' /> 
        </div>
        <div className='absolute top-[-330px]'>
             <Image src='/Ellipse.svg' width= '1300' height= '1300' /> 
        </div>
        <div className='absolute left-[400px] top-[-10px] z-50'>
             <Image src='/Ellipse.svg' width= '500' height= '500' /> 
        </div>
    </div>
  )
}

export default Backgrounds
