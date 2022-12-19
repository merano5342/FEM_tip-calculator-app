import React, { memo, useCallback, useState } from "react"
import TipsBtn from './TipsBtn'
import style from '../css/style.module.scss';
// import { useForm } from 'react-hook-form';
// import { NUMBER_PATTERN, isNumValidate } from 'units/validate'
import { blockInvalidChar } from './tools/blockInvalidChar'
import { isNumValidate } from './tools/isNumValidate'



const Bills = (props) => {
  const { atSetBill, atSetPeople, atApplyTips, state } = props
  const [billError, setBillError] = useState(false)
  const [peopleError, setPeopleError] = useState(false)




  // const isNumValidate = (num) => {
  //   return /^[1-9][0-9]*$/.test(num)
  // }

  const handler = (e, setError, atSet) => {
    const input = parseInt(e.target.value)
    if (!isNumValidate(input)) {
      setError(true)
      atSet("")
    } else {
      setError(false)
      atSet(input)
    }
  }

  const handleBillInput = (e) => {
    handler(e, setBillError, atSetBill)
  }


  const handlePeopleInput = (e) => {
    handler(e, setPeopleError, atSetPeople)
  }


  return (
    <div className={style.bills}>

      {/* BILL input */}
      < div className={style.billBox} >

        <h2 className={style.billTitle}>Bill</h2>
        <div className={style.inputBox}>
          <label className={style.billInput} >
            <input
              type="number"
              name="bill"
              placeholder="0"
              value={state.bill}
              onChange={(e) => {
                handleBillInput(e)
              }}
              onKeyDown={blockInvalidChar}
              data-error={billError} />
          </label>

          <p className={style.textRed}>{
            billError ? "please type in validate value" : " "
          }</p>
        </div >
      </div >


      {/* SELECT TIPS btn */}
      < TipsBtn
        atApplyTips={atApplyTips}
        tipPercent={state.tipPercent}

      />


      {/* NUMBER OF PEOPLE input */}
      < div className={style.billBox} >
        <h2 className={style.billTitle}>Number of People</h2>

        <p className={style.textRed}>{
          peopleError ? "please type in validate value" : " "
        }</p>
        <div className={style.inputBox}>
          <label className={style.peopleNumInput} >
            <input
              type="number"
              name="numberOfPeople"
              placeholder="1"
              value={state.numberOfPeople}
              onChange={(e) => handlePeopleInput(e)}
              onKeyDown={blockInvalidChar}
              data-error={peopleError} />
          </label>

        </div >

      </div >
    </div >



  )
}

export default memo(Bills);