import React from 'react'

export default function InputValue(props) {
  const autoFocus = props.autoFocus != undefined ? true : false
  const step = props.step != undefined ? props.step : 'any' 

  return (
    <div className="flex gap-4 mb-4">
      <label htmlFor="period" className="w-32">{props.label}</label>
      <input type="number"
        className="px-4 py-2 border border-slate-400 flex-grow"
        value={props.value}
        onChange={e => props.handleChange(e)}
        step={step}
        autoFocus={autoFocus}
      />
    </div>
  )
}
