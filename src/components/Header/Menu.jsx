import React from 'react'
import style from './Header.module.scss'
function Menu() {
  return (
    <>
    <div className={style.navbar__bg} />
    <nav className={style.navbar}>
   
        <ul className={style.navbar__list}>
            <li className={style.list__items} >Types of Project</li>
            <li className={style.list__items}>Structure of work</li>
            <li className={style.list__items}>About me</li>
            <li className={style.list__items}>Portfolio</li>
            <li className={style.list__items}>Contact me</li>
        </ul>
        </nav>
        </>
  )
}

export default Menu