import React from 'react'
import style from './Structure.module.scss'
function Structure() {
  return (
    <section className={style.container}>
     <h2 className={style.container__title}>some title for block</h2>
      <div className={style.container__box}>
        <div>

        </div>
      </div>
      </section>
  )
}

export default Structure