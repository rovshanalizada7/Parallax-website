"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUpLong } from "react-icons/fa6";

const Scroll = () => {
  const scrollTarget = useRef<number>(0);
  const [scrollStatus, setScrollStatus] = useState<boolean>(false);
  const pathname = usePathname();
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;

      setScrollProgress(progress);
      setShowTopBtn(scrollTop > 100);
      setScrollStatus(progress >= 50);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  useEffect(() => {
    scrollTarget.current = 0;
    window.scrollTo(0, 0);
  }, [pathname]);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showTopBtn && (
        <button
          onClick={goToTop}
          data-aos="fade-up"
          className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px]"
          style={{
            position: "fixed",
            color: "#fff",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bottom: "40px",
            right: "20px",
            cursor: "pointer",
            zIndex: 999,
            border: "1px solid #3B8082",
            background: `conic-gradient(#3B8082 ${scrollProgress}%, white ${scrollProgress}%)`,
          }}
        >
          <FaArrowUpLong
            className={`text-xl ${
              scrollStatus ? "text-white" : "text-[#3B8082]"
            }`}
          />
        </button>
      )}
    </>
  );
};

export default Scroll;
