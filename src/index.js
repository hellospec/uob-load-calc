import ReactDOM from "react-dom"
import React from "react"
import { useState, useEffect } from "react"

import Installment from './components/Installment'
import InputValue from './components/InputValue'

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
    const amountValue = amount == '' ? 0 : amount
    let totalFinance = parseInt(amountValue) * (100 + parseFloat(interest)) / 100 
    let newInstallment = parseFloat(totalFinance / parseInt(period)).toFixed(0)
    setInstallment(newInstallment)

    return newInstallment
  }

  return (
    <div className="form-wrapper mt-8">
      <InputValue label="ระบุวงเงินกู้" value={amount} handleChange={handleAmountChange} autoFocus />
      <InputValue label="ระบุอัตราดอกเบี้ย" value={interest} handleChange={handleInterestChange} step="0.1"/>
      <InputValue label="ระยะเวลากู้ (เดือน)" value={period} handleChange={handlePeriodChange} />

      <div>
        <Installment value={installment} />
      </div>
      
    </div>
  )
}

const app = document.getElementById('app')
ReactDOM.render(<App />, app)

