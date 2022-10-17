import React from "react";
import styled from "styled-components";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { teamData } from "../utils";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Team = () => {
  return (
    <Section id="core team">
      <div className="title">
        <h2>Meet Our Team</h2>
      </div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        // install Swiper modules
        modules={[Pagination]}
        pagination={{ clickable: true }}
        grabCursor={true}
        className="container team-container"
      >
        {teamData.map(({ image, name, title, socialIcons }, index) => {
          return (
            <SwiperSlide className="card" key={index}>
              <div className="image-content">
                <img src={image} alt="" />
              </div>
              <h2>{name}</h2>
              <p>{title}</p>
              <span className="team-social">
                {socialIcons.map((icon, index) => {
                  return (
                    <span key={index}>
                      <a href={icon.link}>{icon.icon}</a>
                    </span>
                  );
                })}
              </span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Section>
  );
};

const Section = styled.section`
  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 3rem;
      font-weight: 600;
      line-height: 1;
      text-align: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
      color: black;
    }
  }

  .container {
    width: 75%;
    margin: 0 auto;

    &.team-container {
      width: 60%;
      margin-top: 3rem;
      padding-bottom: 50px;
    }

    .card {
      background-color: var(--primary-background_color);
      text-align: center;
      padding: 2rem;
      border-radius: 2rem;
      user-select: none;

      .image-content {
        width: 6rem;
        aspect-ratio: 1/1;
        overflow: hidden;
        border-radius: 50%;
        margin: 0 auto 1rem;
        border: 0.4rem solid #407bff;

        &:hover {
          transform: scale(1.1);
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      h2 {
        color: white;
        font-weight: 600;
      }

      p {
        color: var(--secondary-color);
        font-weight: 300;
        width: 80%;
        margin: 0.8rem auto 0;
      }
    }

    .team-social {
      a {
        margin: 0 0.7rem;

        svg {
          width: 1.5rem;
          height: 1.5rem;
          margin: 1rem auto 0;
          color: white;
        }
      }
    }

    .swiper-pagination-bullet {
      width: 10px !important;
      height: 10px !important;
      border-radius: 8px !important;
      margin: 2px !important;
      background-color: black;
      opacity: 1;

      &-active {
        background-color: var(--primary-color);
        border-radius: 8px !important;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      &.team-container {
        width: 90%;
      }
    }
  }
`;

export default Team;
