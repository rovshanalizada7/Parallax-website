'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import CustomizedTables from '@/components/Table/table'



const Section4 = () => {

    const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.sct4');
      const sectionTop = section?.getBoundingClientRect().top || 0;

      // Animate upward (south to north)
      const moveAmount = Math.max(0, 300 - sectionTop);
      setOffset(moveAmount);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <section className='h-[1000px] w-full bg-[black] flex justify-center items-center relative sct4'>

                <div
                  className='absolute z-1 bottom-[-28%] left-[20%] transition-transform duration-75 ease-linear'
                  style={{
                    transform: `translateY(-${offset}px)`, // negative Y for upward movement
                  }}
                 >
                  <Image
                  className='sct4-img'
                    src='/imgs/Group25.png'
                    width={226}
                    height={750}
                    alt='image25'
                  />
                </div>

  






        <div data-aos="fade-up" data-aos-duration="2000" className='h-[943px] w-[1760px]  flex flex-col gap-[32px] table-div'>
      
            <div className='h-[79px] w-full flex justify-between sct4-div'>
                <span className='text-[64px] font-[500] text-[white]'>LLM Leaderboard</span>
                 <div
                        className="p-[2px] rounded-[91px] inline-block w-[290px] btn-div"
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
                            Submit your model
                        </button>
                 </div> 
            </div>

            <p className='text-[white] text-[24px]'>We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to test LLMs on a large number of different evaluation tasks. <br />
            The higher the score, the better the LLM. </p>

            <div className='px-4'>
              <CustomizedTables/>
            </div>

        </div>
    </section>
  )
}

export default Section4


