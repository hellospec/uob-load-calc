import React from 'react'

export default function Installment(props) {
  return (
    <div>
      <label htmlFor="installment">ค่างวดเดือนละ</label>
      <div>{props.value}</div>
    </div>
  )
}
