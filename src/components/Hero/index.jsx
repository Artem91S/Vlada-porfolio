import React from "react";
import style from "./Hero.module.scss";
function Hero() {
  return (
    <section className={style.container} >


        <p className={style.container__subtext}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          saepe sapiente, quis blanditiis aspernatur id, eveniet illo
          consequatur fuga ratione sed, quidem architecto eligendi dignissimos
          voluptatum repellat ipsa amet voluptate.
        </p>
        <h1 className={style.container__title}>Your 3d visualizer </h1>
        <div className={style.container__button}>
          <button>Make some</button>
        </div>
    </section>
  );
}

export default Hero;
