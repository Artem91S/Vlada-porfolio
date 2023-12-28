import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import bath from '../../assets/image/portfolio/Bedroom.jpg'
import style from './Portfolio.module.scss'
import { IoCaretBackCircle } from "react-icons/io5";
import { IoCaretForwardCircle } from "react-icons/io5";



function Porfolio() {

  const swiperRef = useRef();
  return (

    <section className={style.containar}>
      <h2 className={style.title}>Porfolio Vladysica </h2>
      <Swiper
      className={style.swiper__container}
        spaceBetween={50}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide className={style.slide_container}>
          <img className={style.slide} src={bath} alt="poster1" />
        </SwiperSlide>
        <SwiperSlide className={style.slide_container}>
          <img className={style.slide}  src={bath} alt="poster3" />
        </SwiperSlide>
        <SwiperSlide className={style.slide_container}>
          <img className={style.slide}  src={bath} alt="poster3" />
        </SwiperSlide>
        <SwiperSlide className={style.slide_container}>
          <img className={style.slide} src={bath} alt="poster3" />
        </SwiperSlide>
      </Swiper>
      <div>
        <button className="bg-btnColor rounded-[10px] shadow-2xl shadow-zinc-950/50 p-2  cursor-pointer " onClick={() => swiperRef.current?.slidePrev()}><IoCaretBackCircle className="w-[30px] h-[30px] "/></button>
        <button className="bg-btnColor rounded-[10px] shadow-2xl shadow-zinc-950/50 p-2 cursor-pointer  " onClick={() => swiperRef.current?.slideNext()}><IoCaretForwardCircle className="w-[30px] h-[30px] "/></button>
      </div>
    </section>
  );
}

export default Porfolio;