"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./carousel.css";

const Mark = () => {
  return (
    <div className="mark-slide  ">
      <div className="swip-2 ">
        <Swiper
          spaceBetween={20}
          slidesPerView={6}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={800}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="mark-img">
              <img src="imgs/Frame.png" alt="image 1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mark-img ">
              <img src="imgs/image12.png" alt="image 2" className="telegram" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mark-img">
              <img src="imgs/Frame1.png" alt="image 3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mark-img ">
              <img src="imgs/telegram.png" alt="image 5" className="telegram" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mark-img w-[334px] h-[50px]">
              <img src="imgs/image9.png" alt="image 4" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mark-img">
              <img src="imgs/Frame.png" alt="image 1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mark-img ">
              <img src="imgs/image12.png" alt="image 2" className="telegram" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mark-img">
              <img src="imgs/Frame1.png" alt="image 3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mark-img ">
              <img src="imgs/telegram.png" alt="image 5" className="telegram" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mark-img w-[334px] h-[50px]">
              <img src="imgs/image9.png" alt="image 4" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Mark;
