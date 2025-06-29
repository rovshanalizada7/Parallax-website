

"use client"
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Section1 from "./Section1/sct1"
import Section2 from "./Section2/sct2"
import Section3 from "./Section3/sct3"
import Section4 from "./Section4/sct4"


const Landing = () => {

  

   useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    
     <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
    </main>
  )
}

export default Landing