'use client';

import Image from 'next/image'
import React, { useEffect, useState } from 'react';

const Section3 = () => {

   const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.sct3');
      const sectionTop = section?.getBoundingClientRect().top || 0;

      // Adjust factor to control how fast the image moves
      const moveAmount = Math.max(0, 300 - sectionTop); 
      setOffset(moveAmount);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
        <section className='flex items-center h-[1080px]  w-full bg-[black] relative sct3 '>


           <div
             className="bg-gradient-to-r w-[350px] h-[250px] absolute z-2 left-[25%] bottom-[30%] rounded-[50%] blur-[200px] sct3-bg"
             style={{
              backgroundImage:
              "linear-gradient(to right, rgba(252, 111, 50, 1), rgba(255, 74, 89, 1))",
              }}
            ></div>


               <div
                className='absolute left-20 top-0 transition-transform duration-75 ease-linear'
                style={{
                  transform: `translate(${offset}px, ${offset}px)`,
                }}
              >
                <Image src='/imgs/image20.png' width={260} height={170} alt='image20' />
              </div>



            {/* <div className='absolute top-0 left-20'>
              <Image
              src={"/imgs/image20.png"}
              width={260}
              height={170}
              alt='image20'/>
            </div> */}




          <div className='flex justify-end h-[423px] w-[1229px] z-1 '>

         <div className='h-[423px] w-[1149px] flex flex-col justify-between sct3-content '>

          <h1 className='text-[64px] text-[#FFFFFF] space-y-4 font-[500] leading-[1.1]'>Crowdsourcing our collective <br /> intelligence to build the best AI</h1>

           <div>
             <p className='text-[24px] text-[white] leading-[32px] font-[Inter] font-[400]'>Open source AI has been lagging behind the likes of Google and OpenAI by billions of dollars.</p>
             <p className='text-[24px] text-[white] leading-[32px] font-[Inter] font-[400] mt-4'> Salt aims to solve that by rewarding open source developers who contribute to the democratization of AI. 
               We run  competitions between AI models to find and reward the best AI models. 
             As a result, our users will be able to access the  latest cutting edge AI models.</p>
           </div>

          <div
            className="p-[2px] rounded-[91px] inline-block w-[310px] btn-div"
            style={{
                background: 'linear-gradient(90deg, #B53EA4, #FC6F32, #FF4A59)',
            }}
           >
            <button
                className="py-[24px] px-[48px] tracking-[1px]  rounded-[91px] text-white bg-black w-full h-full cursor-pointer"
                style={{
                    fontFamily: '"Clash Grotesk", sans-serif',
                }}
            >
                Use The Cutting Edge AI
            </button>
         </div> 

       </div>
          </div>



    </section>
    
  )
}

export default Section3