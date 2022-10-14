import React from "react";
import styled from "styled-components";
import { sliderData } from "../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";

const ScreenShots = () => {
  return (
    <Section id="screenshots">
      <div className="title">
        <h2>ScreenShots</h2>
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
    </Section>
  );
};

const Section = styled.section`
  background-color: var(--primary-background_color);

  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 3rem;
      font-weight: 500;
      line-height: 1;
      text-align: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
      color: white;
    }
  }

  .swiper {
    width: 50%;
    margin-top: 3rem;
    padding-bottom: 50px;

    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 238px;
      height: 515px;
      filter: blur(4px);

      &-active {
        filter: blur(0);
      }
    }

    .swiper-slide-img {
      width: 100%;
      height: 555px;
      overflow: hidden;

      img {
        width: 100%;
        border: 5px solid black;
        box-shadow: inset 0 0 0 20px black;
        border-radius: 20px;
      }
    }
  }
  .swiper-pagination-bullet {
    width: 10px !important;
    height: 10px !important;
    border-radius: 8px !important;
    margin: 2px !important;
    background-color: white;
    opacity: 1;

    &-active {
      background-color: var(--primary-color);
      border-radius: 8px !important;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .swiper {
      width: 100%;
    }
  }
`;

export default ScreenShots;
