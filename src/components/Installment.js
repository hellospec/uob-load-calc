import React from 'react'

export default function Installment(props) {
  return (
    <div className="flex gap-4">
      <label htmlFor="installment" className="w-32">ค่างวดเดือนละ</label>
      <div className="px-4 py-2 bg-yellow-200 flex-grow">{props.value}</div>
    </div>
  )
}
