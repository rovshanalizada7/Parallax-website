import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
   <footer className='h-[1040px] w-full bg-[black]'>
    <div className='h-[528px] w-full  flex justify-center items-center '>
        <h1 className='font-inter font-normal text-[32px] leading-[32px] text-white'>Join our community and harvest $SALT</h1>
    </div>
    <div  className='h-[512px] w-full flex justify-center items-end  bg-cover bg-no-repeat bg-center'  style={{ backgroundImage: "url('/imgs/nasa.png')" }}>
     <div className='h-[106px] w-[90%] mb-10 flex flex-col justify-between items-center '>
        <div className='h-[22px] w-full flex justify-center gap-[48px]'>
           <button className='text-[white] text-[18px]'>How It Works</button>
           <button className='text-[white] text-[18px]'>Buy Salt AI</button>
        </div>
        <div className='h-[1px] w-full bg-white'></div>
        <div className='h-[36px] w-full flex justify-between items-center footer-bottom'>
            <div className='w-[88px] h-full flex gap-[16px]'>
                 <Image
                    src={"/imgs/image 123.png"}
                    width={36}
                    height={36}
                    alt='image20'/>
                     <Image
                    src={"/imgs/image 124.png"}
                    width={36}
                    height={36}
                    alt='image20'/>
            </div>
            <div className='w-[296px] h-[15px] flex justify-between items-center footer-spans'>
                <span className='font-inter font-normal text-[12px] text-[#8E8E8E]'>Terms of Use</span>
                <span className='font-inter font-normal text-[12px] text-[#8E8E8E]'>Privacy Policy</span>
                <span className='font-inter font-normal text-[12px] text-[#8E8E8E]'>Cookie Policy</span>
            </div>
        </div>
     </div>
    </div>
   </footer>
  )
}

export default Footer