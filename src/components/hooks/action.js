export const actionSetBill = (e) => {
  return {
    type: 'SET_BILL',
    payload: e.target.value
  }
}

export const actionSetPeople = (e) => {
  return {
    type: 'SET_PEOPLE',
    payload: e.target.value
  }
}

export const actionApplyTips = (tipPercent) => {
  return {
    type: 'APPLY_TIPS',
    payload: tipPercent
  }
}


export const actionCalcTotal = () => {
  return {
    type: 'CALC_TOTAL',
  }
}


export const actionReset = () => {
  return {
    type: 'RESET'
  }
}