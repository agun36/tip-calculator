import React from 'react'
import dollar2 from '../assets/images/icon-dollar copy.svg'
export const Output = (props) => {
  const resetBtn = () => {
    props.setOutput({ tip: 0, total: 0 })
  }

  return (
    <div className='total'>
      <div className='total-row'>
        <div className='total-tip'>
          <h4>Tips Amount </h4>
          <small>/person</small>
        </div>
        <div className='total-number'>
          <img src={dollar2} alt='' className='dollarsign' />
          <h2>{props.output.tip.toFixed(2)}</h2>
        </div>
      </div>
      <div className='total-row'>
        <div className='total-tip'>
          <h4>Total </h4>
          <small>/person</small>
        </div>
        <div className='total-number'>
          <img src={dollar2} alt='' className='dollarsign' />
          <h2>{props.output.total.toFixed(2)}</h2>
        </div>
      </div>

      <button className='resetbtn' onClick={resetBtn}>
        Reset
      </button>
    </div>
  )
}
