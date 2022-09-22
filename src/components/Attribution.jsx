import { memo } from 'react'
import style from '../css/style.module.scss';

const Attribution = () => {
  return (
    <div className={style.attribution}>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="https://github.com/merano5342">Merano Tu</a>.
    </div>
  )
}

export default memo(Attribution)