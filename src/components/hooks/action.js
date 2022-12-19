export const actionSetBill = (bill) => {
  return {
    type: 'SET_BILL',
    payload: bill
  }
}

export const actionSetPeople = (numberOfPeople) => {
  return {
    type: 'SET_PEOPLE',
    payload: numberOfPeople
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