import React from "react";
import { sliderData } from "../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import "../slider.css";

const ScreenShots = () => {
  return (
    <section id="screenshots" className="relative">
      <div className="flex justify-center items-center">
        <h2 className="text-5xl font-semibold text-center my-8">ScreenShots</h2>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={true}
        speed={300}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
      >
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="swiper-slide-img">
                <img src={slide.image} alt={slide.title} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default ScreenShots;
