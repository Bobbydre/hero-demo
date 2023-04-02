import React from 'react';
import Image from 'next/image';
import backgrounds from '@/Data/backgroundData';

const Backgrounds = () => {
    return (
      <div className='relative'>
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={bg.position}
            style={{
              left: bg.left,
              top: bg.top,
              zIndex: bg.zIndex,
            }}
          >
            <Image src={bg.src} width={bg.width} height={bg.height} />
          </div>
        ))}
      </div>
    );
  };
  
  export default Backgrounds;