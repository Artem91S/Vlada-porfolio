import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import style from "./Header.module.scss";
import Menu from "./Menu";

// const textAnimation = {
//   hidden: {
//     // x: -10,
//     opacity: 0,
//     transition: { delay:  0.4 },
//   },
//   visible: (custom) => ({
//     // x: 0,
//     opacity: 1,
//     transition: { delay:  0.4 },
//   }),
// };

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={style.container}>
      <div className={style.container__title}>
        <p>Martynova Vladyslava</p>
      </div>
      <div>
        {!showMenu ? (
          <div className={style.container__icons}>
            <RiMenuFill
              className={style.icon}
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        ) : (
          <div className={style.container__icons}>
            <RxCross2
              className={style.icon}
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        )}
        {showMenu && <Menu/>}
      </div>
    </header>
  );
}

export default Header;
