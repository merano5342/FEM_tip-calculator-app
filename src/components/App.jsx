import React, { useCallback, useEffect } from 'react'
import style from '../css/style.module.scss';
import Bills from './Bills'
import Results from './Results';
import Attribution from './Attribution';
import useBillCalcTotal from './hooks/useBillCalcTotal';
import { actionSetBill, actionSetPeople, actionApplyTips, actionCalcTotal, actionReset } from './hooks/action';



const App = () => {
  const [state, dispatch] = useBillCalcTotal()

  // calc Total Results
  useEffect(() => {
    atCalcTotal()
  }, [state.bill, state.numberOfPeople, state.tipPercent])



  const atSetBill = useCallback((e) => {
    dispatch(actionSetBill(e))
  }, [dispatch])

  const atSetPeople = useCallback((e) => {
    dispatch(actionSetPeople(e))
  }, [dispatch])


  const atApplyTips = useCallback(
    (tipPercent) => {
      dispatch(actionApplyTips(tipPercent))
    }, [dispatch])


  const atCalcTotal = useCallback(() => {
    dispatch(actionCalcTotal())
  }, [dispatch])

  const atReset = useCallback(() => {
    dispatch(actionReset())
  }, [dispatch])



  return (
    <div className={style.wrapper}>
      <div className={style.title}>SPLI<br />TTER</div>
      <div className={style.container}>
        <Bills
          atSetBill={atSetBill}
          atSetPeople={atSetPeople}
          atApplyTips={atApplyTips}
          state={state} />
        <Results
          total={state.total}
          tipAmount={state.tipAmount}
          atReset={atReset} />
      </div >
      <Attribution />
    </div >
  );
};

export default App;
