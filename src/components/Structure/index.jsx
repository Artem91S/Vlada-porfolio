import React, { useEffect, useRef, useState } from "react";
import style from "./Structure.module.scss";
import { BsCardList } from "react-icons/bs";
import { CgCheck } from "react-icons/cg";
import { LuListChecks } from "react-icons/lu";
import { PiListChecks } from "react-icons/pi";
import { PiFlagCheckeredFill } from "react-icons/pi";
import { useParallax } from "react-scroll-parallax";

const optionsIcon = [
  {
    id: "1",
    icon: <BsCardList className={style.option__icon} />,
    text: "1.Отримання тз від клієнта",
  },
  {
    id: "2",
    icon: <CgCheck className={style.option__icon} />,
    text: "2.1етап правок",
  },
  {
    id: "3",
    icon: <LuListChecks className={style.option__icon} />,
    text: "3.2 етап правок",
  },
  {
    id: "4",
    icon: <PiListChecks className={style.option__icon} />,
    text: "4.3 етап правок ",
  },
  {
    id: "5",
    icon: <PiFlagCheckeredFill className={style.option__icon} />,
    text: "5. Фінальеі візуалізації покращенної якості",
  },
];

// const optionsText = [
//   {
//     id: "6",
//     text: "1.Отримання тз від клієнта",
//   },
//   {
//     id: "7",
//     text: "2.1етап правок",
//   },
//   {
//     id: "8",
//     text: "3.2 етап правок",
//   },
//   {
//     id: "9",
//     text: "4.3 етап правок ",
//   },
//   {
//     id: "10",
//     text: "5. Фінальеі візуалізації покращенної якості",
//   },
// ];

function Structure() {
  const parallax = useParallax({
     translateX:['100px','-300px'],
     startScroll:1461,
    //  endScroll:2188
    //  speed:[-30],
    //  startScroll:-20
  });
  
  const container =useRef()
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //     const position = window.pageYOffset;
  //     setScrollPosition(position);
  // };
  
  // useEffect(() => {
  //     window.addEventListener('scroll', handleScroll, { passive: true });
  
  //     return () => {
  //         window.removeEventListener('scroll', handleScroll);
  //     };
  // }, [])
  
  // console.log(scrollPosition);
  return (

    <section className={style.container} ref={container} >
      <h2 className={style.container__title}>some title for block</h2>
      <div className={style.container__option}   >
        <div className={style.container__option_icons } ref={parallax.ref}  >
          {optionsIcon.map((icon) => (
            <div className={style.wrap} >
              <div className={style.option__wrapper_icons} key={icon.id}>
                <div className={style.option__icons_container}>{icon.icon}</div>
                <div
                  className={
                    icon.id === "5" ? style.icons_line_hidden : style.icons_line
                  }
                ></div>
              </div>
              <p className={style.option__description}>{icon.text}</p>
            </div>
          ))}
        </div>
        {/* <div className={style.option__wrapper_description} >
          {optionsText.map((option) => (
            <div  key={option.id}>
              <p className={style.option__description}>{option.text}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default Structure;
