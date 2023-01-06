import React, { useState } from 'react'
import { Output } from '../Components/Output'
import { Select } from '../Components/Select'

export const Main = () => {
  const [output, setOutput] = useState({ tip: 0, total: 0 })

  return (
    <div className='calculator-wrapper'>
      <Select setOutput={setOutput} />
      <Output output={output} setOutput={setOutput} />
    </div>
  )
}
