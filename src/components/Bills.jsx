import React, { memo, useCallback } from "react"
import TipsBtn from './TipsBtn'
import style from '../css/style.module.scss';
import { useForm } from 'react-hook-form';
import { NUMBER_PATTERN, isNumValidate } from 'units/validate'

const Bills = (props) => {
  const { atSetBill, atSetPeople, atApplyTips, state } = props

  return (
    <div className={style.bills}>

      {/* BILL input */}
      <div className={style.billContainer}>
        <h2 className={style.billTitle}>Bill</h2>
        <input type="number" name="bill" className={style.billInput} placeholder="0"
          value={state.bill}
          onChange={(e) => {
            atSetBill(e)
          }} />

        {/* {isNumValidate(state.bill) || <small className={style.textRed}>This field is required</small>} */}
      </div>

      {/* SELECT TIPS btn */}
      <div className={style.billContainer}>
        <h2 className={style.billTitle}>Select Tip %</h2>
        <TipsBtn atApplyTips={atApplyTips} tipPercent={state.tipPercent} />
      </div>

      {/* NUMBER OF PEOPLE input */}
      <div className={style.billContainer}>
        <h2 className={style.billTitle}>Number of People</h2>
        <input type="number" name="numberOfPeople" className={style.peopleNumInput}
          value={state.numberOfPeople || 1}
          onChange={(e) => {
            atSetPeople(e)
          }} />
      </div>
    </div >
  )
}

export default memo(Bills);