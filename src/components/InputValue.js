import React from 'react'

export default function InputValue(props) {
  const autoFocus = props.autoFocus != undefined ? true : false
  const step = props.step != undefined ? props.step : 'any' 

  return (
    <div>
      <label htmlFor="period">{props.label}</label>
      <input type="number"
        value={props.value}
        onChange={e => props.handleChange(e)}
        step={step}
        autoFocus={autoFocus}
      />
    </div>
  )
}
