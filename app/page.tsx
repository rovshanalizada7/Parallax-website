"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import Landing from "./pages/Landing/page";
import { useEffect } from "react";

export default function Home() {

      useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
    });
  }, []);

  return (
   <>
   <Landing/>
   </>
  );
}
