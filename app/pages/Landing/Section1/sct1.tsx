
import React from "react";



export const Section1 = () => {
    return (
        <section className="flex justify-center items-center h-[1080px] w-full bg-[black] relative">

            <header className="h-[50px] w-full  absolute top-[32px] z-2">
                <menu className="flex gap-[24px] justify-center h-full">
                    <button className="text-[18px] text-[white] cursor-pointer">How It Works</button>
                     <div
                        className="p-[2px] rounded-[91px] inline-block w-[9%] "
                        style={{
                            background: 'linear-gradient(90deg, #B53EA4, #FC6F32, #FF4A59)',
                        }}
                    >
                        <button
                            className="w-[157px] h-[52px] tracking-[1px]  rounded-[91px] text-white bg-black w-full h-full cursor-pointer"
                            style={{
                                fontFamily: '"Clash Grotesk", sans-serif',
                            }}
                        >
                            Buy Spice AI
                        </button>
                    </div> 
                </menu>
            </header>

            <div>
                <img className="w-[1016px] h-[1016px] absolute right-0 top-[5%] z-[1] fixed" src="imgs/moon.jpg" alt="" />
            </div>

            <div className="flex flex-col gap-[100px]  justify-between h-[784p]  w-[92%] absolute z-[2]">

                <div className=" w-[92%] h-[492p] flex flex-col gap-[36px]">
                    <h1
                        className="text-[128px] font-[500] text-transparent bg-clip-text"
                        style={{
                            backgroundImage: 'linear-gradient(90deg, #B53EA4, #FC6F32, #FF4A59)',
                            fontFamily: '"Clash Grotesk", sans-serif',
                        }}
                    >
                        A new economic primitive for funding decentralized AI
                    </h1>


                    <p className="text-[white]">We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI</p>

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
                            Buy Spice AI
                        </button>
                    </div> 

                 
                       {/* <div className="rounded-[91px]">
                        <button 
                                            
                        style={{
                        background: 'transparent',
                        padding: '24px 48px',
                        border: '2px solid',
                        borderImage: 'linear-gradient(90deg, #B53EA4, #FC6F32, #FF4A59)',
                        borderImageSlice: 1, // ✅ ensures border gradient is applied correctly
                        color: 'white',
                        display: 'inline-block',
                        width: 'auto',
                        borderRadius: '91px', // ✅ now works
                        backgroundClip: 'padding-box', // ✅ helps with rounded clipping
                        }}
                    >
                        Buy Spice AI
                    </button>
                    </div> */}

                  
               



                </div>

                <div className="flex justify-between w-full h-[192px] ">
                    
                    <button className="flex flex-col justify-center gap-[20px] w-[564px] h-[192px] opacity-35 rounded-[91px]  text-[white] bg-[linear-gradient(to_right,_rgba(80,20,70,1),_rgba(150,50,20,1),_rgba(120,25,35,1))]">
                        <span className="text-[64px] font-[600]">10,873</span>
                        <span className="text-[24px] font-[400]">LLM models</span>
                    </button>

                       <button className="flex flex-col justify-center gap-[20px] w-[564px] h-[192px] opacity-35 rounded-[91px] text-[white] bg-[linear-gradient(to_right,_rgba(80,20,70,1),_rgba(150,50,20,1),_rgba(120,25,35,1))]">
                        <span className="text-[64px] font-[600]">$72,470,728</span>
                        <span className="text-[24px] font-[400]">paid to data scientists</span>
                    </button>
                   
                      <button className="flex flex-col justify-center gap-[20px] w-[564px] h-[192px] opacity-30 rounded-[91px] text-[white] bg-[linear-gradient(to_right,_rgba(80,20,70,1),_rgba(150,50,20,1),_rgba(120,25,35,1))]">
                        <span className="text-[64px] font-[600]">6,557</span>
                        <span className="text-[24px] font-[400]">members</span>
                    </button>

                    
                </div>

            </div>

        </section>
    );
};

export default Section1;