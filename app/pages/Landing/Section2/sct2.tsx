import Mark from "@/components/Carousel/carousel";
import React from "react";

const Section2 = () => {
  return (
    <section  className="h-[1080px] w-full flex justify-center items-center bg-[black] relative sct2 overflow-hidden">
      <div
        className="bg-gradient-to-r w-[250px] h-[200px] absolute z-2 left-[25%] bottom-[30%] rounded-[50%] blur-[200px] sct2-bg"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(252, 111, 50, 1), rgba(255, 74, 89, 1))",
        }}
      ></div>
      <div className="h-[210px] w-full flex flex-col justify-between items-center ">
        <h1 data-aos="fade-right" className="text-[48px] text-[white] font-[500] z-1">
          Projects integrated into the Arrakis AI Ecosystem
        </h1>
        <div data-aos="fade-up-left" className="h-[102px] w-full ">
          <Mark />
        </div>
      </div>
    </section>
  );
};

export default Section2;
