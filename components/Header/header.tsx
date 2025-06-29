import React from "react";

const Header = () => {
  return (
    <header className="h-[50px] w-full  absolute top-[32px] z-2 overflow-hidden">
      <menu
        data-aos="fade-left"
        data-aos-duration="2000"
        className="flex gap-[24px] justify-center h-full"
      >
        <button className="text-[18px] text-[white] cursor-pointer">
          How It Works
        </button>
        <div
          className="p-[2px] rounded-[91px] inline-block w-[155px] "
          style={{
            background: "linear-gradient(90deg, #B53EA4, #FC6F32, #FF4A59)",
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
  );
};

export default Header;
