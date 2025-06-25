
import React from 'react'

const Section3 = () => {

  return (
    <section className='flex items-center h-[1080px]  w-full bg-[black]'>
      <div className='flex justify-end h-[423px] w-[1229px] z-1'>

       <div className='h-[423px] w-[1149px] flex flex-col justify-between '>

        <h1 className='text-[64px] text-[#FFFFFF] space-y-4 font-[500] leading-[1.1]'>Crowdsourcing our collective intelligence to build the best AI</h1>

          <div>
             <p className='text-[24px] text-[white] leading-[32px] font-[Inter] font-[400]'>Open source AI has been lagging behind the likes of Google and OpenAI by billions of dollars.</p>
             <p className='text-[24px] text-[white] leading-[32px] font-[Inter] font-[400] mt-4'> Salt aims to solve that by rewarding open source developers who contribute to the democratization of AI. 
               We run competitions between AI models to find and reward the best AI models. 
             As a result, our users will be able to access the latest cutting edge AI models.</p>
          </div>

         <div
            className="p-[2px] rounded-[91px] inline-block w-[29%] "
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