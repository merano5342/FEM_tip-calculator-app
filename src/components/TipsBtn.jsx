import React, { memo } from "react"
import style from '../css/style.module.scss';


const tipData = [
  {
    id: '5%',
    value: 0.05
  },
  {
    id: '10%',
    value: 0.1
  },
  {
    id: '15%',
    value: 0.15
  },
  {
    id: '25%',
    value: 0.25
  },
  {
    id: '50%',
    value: 0.5
  }
]

// 防止頁面重新 render
const handleSubmit = (e) => {
  e.preventDefault();
}


const TipsBtn = (props) => {
  const { atApplyTips, tipPercent } = props

  return (
    <div className={style.tipBtns}>
      {tipData.map((tip) => {
        return (
          <button
            type="submit"
            key={tip.id}
            className={style.tipBtn}
            data-active={tipPercent === tip.value}
            onClick={(e) => {
              atApplyTips(tip.value)
              handleSubmit(e)
            }}
          >
            {tip.id}
          </button>
        )
      })}
    </div >
  )
}
export default memo(TipsBtn)