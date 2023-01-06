import React, { useEffect, useState } from 'react'
import dollar from '../assets/images/icon-dollar.svg'
import people2 from '../assets/images/icon-person.svg'

export const Select = (props) => {
  const [percentage, setPercentage] = useState()
  const [error, setError] = useState({})
  const [formvalues, setFormvalues] = useState({
    bill: '',
    people: 0,
  })

  const handleChange = (e) => {
    setPercentage(e)
  }

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormvalues((prev) => ({
      ...prev,
      [name]: Number(value),
    }))
  }

  const calculateTip = () => {
    if (percentage) {
      if (formvalues.bill === 0 || !formvalues.bill) {
        setError({
          bill: "can't be blank",
        })
        return
      }
      if (formvalues.people === 0 || !formvalues.people) {
        setError({
          people: "can't be blank",
        })
        return
      }
      setError({})
      console.log('calculate tip', formvalues)

      // Calculate the tip and total bill per person
      const tip = (formvalues.bill / formvalues.people) * percentage
      const totalBill = formvalues.bill / formvalues.people + tip
      props.setOutput({
        tip: tip,
        total: totalBill,
      })
    }
  }

  useEffect(() => {
    calculateTip()
  }, [formvalues, percentage])

  return (
    <div className='main'>
      <form action=''>
        <div className='form-group'>
          <label htmlFor='bill'>Bill</label>
          <div className='input-group'>
            <img src={dollar} alt='' />
            <input type='number' name='bill' onChange={handleInput} />
          </div>
          <div> {error.bill && <span>{error.bill}</span>}</div>
        </div>
        <div className='group'>
          <h4>Select Tip %</h4>
          <div className='button-group'>
            <button
              type='button'
              className={percentage === 0.05 ? 'btn-light-green' : 'btn'}
              onClick={() => handleChange(0.05)}
            >
              5%
            </button>
            <button
              type='button'
              className={percentage === 0.1 ? 'btn-light-green' : 'btn'}
              onClick={() => handleChange(0.1)}
            >
              10%
            </button>
            <button
              type='button'
              className={percentage === 0.15 ? 'btn-light-green' : 'btn'}
              onClick={() => handleChange(0.15)}
            >
              15%
            </button>
            <button
              type='button'
              className={percentage === 0.25 ? 'btn-light-green' : 'btn'}
              onClick={() => handleChange(0.25)}
            >
              25%
            </button>
            <button
              type='button'
              className={percentage === 0.5 ? 'btn-light-green' : 'btn'}
              onClick={() => handleChange(0.5)}
            >
              50%
            </button>
            <button
              type='button'
              className={percentage === 'custom' ? 'btn-light' : 'btn'}
              onClick={() => handleChange('custom')}
            >
              Custom
            </button>
          </div>
        </div>
        <div className='form-group'>
          <label
            htmlFor='number'
            className='number
          '
          >
            Number of People
          </label>
          <div className='input-group'>
            <img src={people2} alt='' />
            <input type='number' name='people' onChange={handleInput} />
          </div>
          <div> {error.people && <span>{error.people}</span>}</div>
        </div>
      </form>
    </div>
  )
}
