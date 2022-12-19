import React, { memo, useEffect, useState } from "react"
import style from '../css/style.module.scss';
import { blockInvalidChar } from './tools/blockInvalidChar'
import { isNumValidate } from './tools/isNumValidate'


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
  const [inputValue, setInputValue] = useState('')
  const [tipsError, setTipsError] = useState(false)


  useEffect(() => {
    if (!tipPercent) {
      setInputValue('')
    } else {
      setTipsError(false)
    }
  }, [tipPercent])


  const isTipsValidate = (num) => {
    return /^(0|[1-9][0-9]*)$/.test(num) || num === NaN
  }


  const handleTipsInput = (e) => {
    const input = parseInt(e.target.value)
    const inputPercent = input / 100
    if (!isTipsValidate(input) || input > 99) {
      console.log("False", input)

      setInputValue("")
      setTipsError(true)
      atApplyTips("")
    } else {
      console.log("true", input)
      setInputValue(input)
      setTipsError(false)
      atApplyTips(inputPercent)
    }
  }




  return (
    <div className={style.billBox}>
      <h2 className={style.billTitle}>Select Tip %</h2>

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
                setInputValue('')
                handleSubmit(e)
              }}
            >
              {tip.id}
            </button>
          )
        })}
        <div className={style.inputBox}>
          <input type="number"
            name="tipInput"
            className={style.tipInput}
            value={inputValue}
            placeholder="Custom"
            onChange={(e) => handleTipsInput(e)}
            onKeyDown={blockInvalidChar}
            data-error={tipsError}
          />
        </div>
      </div >
      <p className={style.textRed}>{
        tipsError ? "please type in validate value" : " "
      }</p>

    </div >

  )
}
export default memo(TipsBtn)