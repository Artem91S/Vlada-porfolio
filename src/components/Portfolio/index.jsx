import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import style from './Portfolio.module.scss'
import "swiper/swiper-bundle.css";

import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

import Bathroom from '../../assets/image/portfolio/Bathroom.jpg'
import Bedroom from '../../assets/image/portfolio/Bedroom.jpg'
import Cabinet from '../../assets/image/portfolio/Cabinet.jpg'
import Commercial from '../../assets/image/portfolio/Commercial.jpg'
import Kitchen from '../../assets/image/portfolio/Kitchen.jpg'
import Living_room from '../../assets/image/portfolio/Living-room.jpg'
import Patio from '../../assets/image/portfolio/Patio.jpg'
import Wardrobe from '../../assets/image/portfolio/Wardrobe.jpg'

const posters=[
  {
    id:'1',
    img:Bathroom
  },
  {
    id:'2',
    img:Bedroom
  },
  {
    id:'3',
    img:Cabinet
  },
  {
    id:'4',
    img:Commercial
  },
  {
    id:'5',
    img:Kitchen
  },
  {
    id:'6',
    img:Living_room
  },
  {
    id:'7',
    img:Patio
  },
  {
    id:'8',
    img:Wardrobe
  },

]

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
        {
          posters.map(slide=>(
            <SwiperSlide key={slide.id}   className={style.swiper_container__slide} >
              <img src={slide.img} alt="slide"/>
            </SwiperSlide>
          ))
        }
      </Swiper> 
      <div className={style.portfolio__button_container}>
        <button className={style.button_container__button} onClick={() => swiperRef.current?.slidePrev()}><FiArrowLeft className={style.arrow}/></button>
        <button className={style.button_container__button} onClick={() => swiperRef.current?.slideNext()}><FiArrowRight className={style.arrow}/></button>
      </div>
    </section>
  );
}

export default Portfolio;