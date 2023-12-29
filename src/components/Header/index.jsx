import React, { useEffect, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import style from "./Header.module.scss";
import Menu from "./Menu";


function Header() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(()=>{
    if(showMenu){
      document.body.style.overflow = 'hidden'
    }
   else{
    document.body.style.overflow = 'auto'
   }
  },[showMenu])
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
