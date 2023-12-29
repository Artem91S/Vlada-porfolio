import { useRef} from "react";
import style from "./Structure.module.scss";
import { BsCardList } from "react-icons/bs";
import { CgCheck } from "react-icons/cg";
import { LuListChecks } from "react-icons/lu";
import { PiListChecks } from "react-icons/pi";
import { PiFlagCheckeredFill } from "react-icons/pi";
import { motion, useTransform, useScroll } from "framer-motion";


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


function Structure() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-65%","3%"]);
  return (
    <section className={style.container} ref={targetRef} >
      <h2 className={style.container__title}>some title for block</h2>
      <div className={style.container__option}   >
        <motion.div className={style.container__option_icons} style={{ x }}  >
          {optionsIcon.map((icon) => (
            <div className={style.option__wrap} key={icon.id} >
              <div className={style.option__wrapper_icons} >
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
        </motion.div>
      </div>
    </section>

  );
}

export default Structure;
