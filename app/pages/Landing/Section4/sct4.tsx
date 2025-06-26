
import CustomizedTables from '@/components/Table/table'
import React from 'react'


const Section4 = () => {

  return (

    <section className='h-[1000px] w-full bg-[black] flex justify-center items-center'>
     <div className='h-[943px] w-[1760px]  flex flex-col gap-[32px] '>
      
            <div className='h-[79px] w-full flex justify-between'>
                <span className='text-[64px] font-[500] text-[white]'>LLM Leaderboard</span>
                 <div
                        className="p-[2px] rounded-[91px] inline-block w-[17%] "
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

            <CustomizedTables/>

     </div>
    </section>
  )
}

export default Section4


