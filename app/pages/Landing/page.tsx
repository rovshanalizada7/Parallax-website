"use client";
import { useEffect } from "react";
import Section1 from "./Section1/sct1";
import Section2 from "./Section2/sct2";
import Section3 from "./Section3/sct3";
import Section4 from "./Section4/sct4";

const Landing = () => {
  useEffect(() => {
    const handleScroll = () => {
      const moonImg = document.getElementById("moonImage");
      const section4 = document.getElementById("section4");

      if (!moonImg || !section4) return;

      const rect = section4.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        moonImg.style.opacity = "0";
      } else {
        moonImg.style.opacity = "1";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative overflow-hidden">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
};

export default Landing;
