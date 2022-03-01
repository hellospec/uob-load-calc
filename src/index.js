import ReactDOM from "react-dom"
import React from "react"
import { useState, useEffect } from "react"

function App() {
  const DEFAULT_INTEREST = 2.0
  const DEFAULT_PERIOD_MONTHS = 48

  const [amount, setAmount] = useState(0)
  const [interest, setInterest] = useState(DEFAULT_INTEREST)
  const [period, setPeriod] = useState(DEFAULT_PERIOD_MONTHS)
  const [installment, setInstallment] = useState(0)

  useEffect(() => {
    calculateInstallment()
  })

  const handleAmountChange = (e) => {
    setAmount(e.target.value)
  }

  const handleInterestChange = (e) => {
    setInterest(e.target.value)
  }

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value)
  }

  const calculateInstallment = () => {
    let totalFinance = parseInt(amount) * (100 + parseFloat(interest)) / 100 
    let newInstallment = parseFloat(totalFinance / period).toFixed(0)
    setInstallment(newInstallment)

    return newInstallment
  }

  return (
    <div>
      <InputValue label="ระบุวงเงินกู้" value={amount} handleChange={handleAmountChange} />
      <InputValue label="ระบุอัตราดอกเบี้ย" value={interest} handleChange={handleInterestChange} step="0.1" />
      <InputValue label="ระยะเวลากู้ (เดือน)" value={period} handleChange={handlePeriodChange} />

      <div>
        <Installment value={installment} />
      </div>
      
    </div>
  )
}

function InputValue(props) {
  return (
    <div>
      <label htmlFor="period">{props.label}</label>
      <input type="number"
        value={props.value}
        onChange={e => props.handleChange(e)}
        step={ props.step != undefined ? props.step : 'any' }
      />
    </div>
  )
}

function Installment(props) {
  return (
    <div>
      <label htmlFor="installment">ค่างวดเดือนละ</label>
      <div>{props.value}</div>
    </div>
  )
}

const app = document.getElementById('app')
ReactDOM.render(<App />, app)

