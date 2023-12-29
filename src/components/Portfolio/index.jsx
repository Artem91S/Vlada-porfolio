import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import style from "./Portfolio.module.scss";
import "swiper/swiper-bundle.css";

import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

const posters = [
  {
    id: "1",
    img: "/images/portfolio/Bathroom.jpg",
  },
  {
    id: "2",
    img: "/images/portfolio/Bedroom.jpg",
  },
  {
    id: "3",
    img: "/images/portfolio/Cabinet.jpg",
  },
  {
    id: "4",
    img: "/images/portfolio/Commercial.jpg",
  },
  {
    id: "5",
    img: "/images/portfolio/Kitchen.jpg",
  },
  {
    id: "6",
    img: "/images/portfolio/Living_room.jpg",
  },
  {
    id: "7",
    img: "/images/portfolio/Patio.jpg",
  },
  {
    id: "8",
    img: "/images/portfolio/Wardrobe.jpg",
  },
];

function Portfolio() {
  const swiperRef = useRef();
  return (
    <section className={style.portfolio__containar}>
      <h2 className={style.portfolio__title}>Portfolio Vladysica </h2>
      <Swiper
        className={style.portfolio__swiper_container}
        spaceBetween={50}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {posters.map((slide) => (
          <SwiperSlide key={slide.id } className={style.swiper_container__wrapper}>
            <div
              className={style.swiper_container__slide}
              style={{ background: `url(${slide.img})no-repeat center/cover` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={style.portfolio__button_container}>
        <button
          className={style.button_container__button}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FiArrowLeft className={style.arrow} />
        </button>
        <button
          className={style.button_container__button}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FiArrowRight className={style.arrow} />
        </button>
      </div>
    </section>
  );
}

export default Portfolio;
