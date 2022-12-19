import { memo } from "react"
import style from '../css/style.module.scss';


const Results = (props) => {
  const { total, tipAmount, atReset } = props
  return (
    <div className={style.results}>
      <div className={style.resultsTop}>
        <div className={style.resultsTopLine}>
          <div>
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <div className={style.price}>
            ${tipAmount}
          </div>
        </div>
        <div className={style.resultsTopLine}>
          <div>
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <div className={style.price}>
            ${total}
          </div>
        </div>
      </div>
      <button className={style.resetBtn} onClick={atReset}>
        Reset
      </button>
    </div>
  )
}

export default memo(Results)