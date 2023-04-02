import React from 'react';
import Image from 'next/image';
import images from '@/Data/imageData';



const Card = () => {
    return (
      <div style={{ position: "relative" }}>
        {images.map(({ nftName, tokenPrice, priceLabel, time, timeLabel, nft, top, left }) => (
          <div
            key={nftName}
            style={{
              position: "relative",
              top,
              left,
            }}
          >
            <div className='bg-black py-2 px-3 w-[10rem] h-[15rem] border border-black rounded-[1rem] z-50 '>
              <div>
                <Image src={nft} width="200" height="200" />
                <h3 className="mt-4 mb-2 text-md text-white font-bold">{nftName}</h3>
                <div>
                  <div className="flex flex-row gap-x-5 text-md text-white">
                    <div>
                      <h2 className="text-[10px]">{tokenPrice}</h2>
                      <p className="text-[7px] text-[#4C4C4C]">{priceLabel}</p>
                    </div>
  
                    <div>
                      <h2 className="text-white text-[10px]">{time}</h2>
                      <p className="text-[#4C4C4C] text-[7px]">{timeLabel}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
      
    );
  };
  
  export default Card;
  