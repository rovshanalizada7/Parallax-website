"use client";
import React, { useEffect, useState } from "react";



export const Section1 = () => {

   


    return (
        <section className="flex justify-center items-end h-[1080px] w-full bg-[black] relative">

            <header className="h-[50px] w-full  absolute top-[32px] z-2">
                <menu className="flex gap-[24px] justify-center h-full">
                    <button className="text-[18px] text-[white] cursor-pointer">How It Works</button>
                     <div
                        className="p-[2px] rounded-[91px] inline-block w-[155px] "
                        style={{
                            background: 'linear-gradient(90deg, #B53EA4, #FC6F32, #FF4A59)',
                        }}
                    >
                        <button
                            className=" tracking-[1px]  rounded-[91px] text-white bg-black w-full h-full cursor-pointer"
                            style={{
                                fontFamily: '"Clash Grotesk", sans-serif',
                            }}
                        >
                            Buy Spice AI
                        </button>
                    </div> 
                </menu>
            </header>

              <div
                className="bg-gradient-to-r w-[350px] h-[150px] absolute z-2 left-[15%] bottom-[-3%] rounded-[50%] blur-[220px] bg-img1"
                style={{
                    backgroundImage: 'linear-gradient(to right, rgba(252, 111, 50, 1), rgba(255, 74, 89, 1))',
                }}
             ></div>

              <div
                className="bg-gradient-to-r absolute z-2 left-[23%] top-[-10%] w-[350px] h-[250px] blur-[200px] rounded-[50%] bg-img2"
                style={{
                    backgroundImage: 'linear-gradient(to right, rgba(50, 191, 252, 1), rgba(0, 85, 119, 1))',
                }}
             ></div>
             
              

             {/* <div>
                <img className="w-[1016px] h-[1016px]  right-0 top-[5%] z-1 fixed sct1-bg" src="imgs/moon.jpg" alt="" />
             </div> */}

             <div className="flex flex-col  justify-between h-[894px]  w-[92%] absolute z-[2]">

                <div className=" w-[92%] h-[492px] flex flex-col gap-[36px]">
                    <h1
                        className="text-[128px] font-[500] text-transparent bg-clip-text sct1-h1"
                        style={{
                            backgroundImage: 'linear-gradient(90deg, #B53EA4, #FC6F32, #FF4A59)',
                            fontFamily: '"Clash Grotesk", sans-serif',
                        }}
                    >
                        A new economic primitive <br /> for funding decentralized AI
                    </h1>


                    <p className="text-[white] text-[24px] sct1-p">We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI</p>

                     <div
                        className="p-[2px] rounded-[91px] inline-block w-[240px] sct1-btn "
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
                            Buy Spice AI
                        </button>
                    </div> 

                </div>

                    


                <div className="flex justify-between w-full h-[192px] btns">
                    
                    <button className="flex flex-col justify-center gap-[20px] w-[564px] h-[192px] opacity-35 rounded-[91px]  text-[white] bg-[linear-gradient(to_right,_rgba(80,20,70,1),_rgba(150,50,20,1),_rgba(120,25,35,1))]">
                        <span className="text-[64px] font-[600] span1">10,873</span>
                        <span className="text-[24px] font-[400] span2">LLM models</span>
                    </button>

                       <button className="flex flex-col justify-center gap-[20px] w-[564px] h-[192px] opacity-35 rounded-[91px] text-[white] bg-[linear-gradient(to_right,_rgba(80,20,70,1),_rgba(150,50,20,1),_rgba(120,25,35,1))]">
                        <span className="text-[64px] font-[600] span1">$72,470,728</span>
                        <span className="text-[24px] font-[400] span2">paid to data scientists</span>
                    </button>
                   
                      <button className="flex flex-col justify-center gap-[20px] w-[564px] h-[192px] opacity-30 rounded-[91px] text-[white] bg-[linear-gradient(to_right,_rgba(80,20,70,1),_rgba(150,50,20,1),_rgba(120,25,35,1))]">
                        <span className="text-[64px] font-[600] span1">6,557</span>
                        <span className="text-[24px] font-[400] span2">members</span>
                    </button>

                    
                </div>

             </div>

        </section>
    );
};

export default Section1;