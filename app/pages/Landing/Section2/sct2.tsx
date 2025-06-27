import Mark from '@/components/Carousel/carousel'
import React from 'react'

const Section2 = () => {

  return (
  
   <section className='h-[1000px] w-full flex justify-center items-center bg-[black] sct2'>
     <div className='h-[210px] w-full flex flex-col justify-between items-center '>
        <h1 className='text-[48px] text-[white] font-[500] z-1'>Projects integrated into the Arrakis AI Ecosystem</h1>
        <div className='h-[102px] w-full '>
            <Mark />
        </div>
     </div>
    </section>
  )
}

export default Section2