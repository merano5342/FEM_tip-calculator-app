import { useReducer } from "react";


const initialState = {
  bill: "",
  numberOfPeople: 1,
  tipPercent: 0,

  tipAmount: 0,
  total: 0
};

const mathRounded = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

const calcTotalAmount = (bill, numberOfPeople, tipPercent) => {
  const total = mathRounded(bill * (1 + tipPercent) / numberOfPeople)
  return total
}

const calcTipAmount = (bill, numberOfPeople, tipPercent) => {
  const tipAmount = mathRounded(bill * tipPercent / numberOfPeople)
  return tipAmount
}

const billReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BILL': {
      const bill = parseInt(action.payload)
      return {
        ...state,
        bill
      }
    }
    case 'SET_PEOPLE': {
      const numberOfPeople = parseInt(action.payload)
      return {
        ...state,
        numberOfPeople
      }
    }
    case 'APPLY_TIPS': {
      const tipPercent = (action.payload)
      return {
        ...state,
        tipPercent
      }
    }

    case 'CALC_TOTAL':
      {
        return {
          ...state,
          total: calcTotalAmount(state.bill, state.numberOfPeople, state.tipPercent),
          tipAmount: calcTipAmount(state.bill, state.numberOfPeople, state.tipPercent)
        }
      }
    case 'RESET':
      {
        return initialState
      }
    default:
      return state
  }
}

export default function useBillCalcTotal() {
  return useReducer(billReducer, initialState)
}