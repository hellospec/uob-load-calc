import ReactDOM from "react-dom"
import React from "react"
import { useState } from "react"

function App() {
  const DEFAULT_INTEREST = 2.0
  const DEFAULT_PERIOD_MONTHS = 48

  const [amount, setAmount] = useState(0)
  const [interest, setInterest] = useState(DEFAULT_INTEREST)
  const [period, setPeriod] = useState(DEFAULT_PERIOD_MONTHS)
  const [installment, setInstallment] = useState(0)

  const handleAmountChange = (e) => {
    setAmount(e.target.value)
    calculateInstallment()
  }

  const handleInterestChange = (e) => {
    setInterest(e.target.value)
    calculateInstallment()
  }

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value)
    calculateInstallment()
  }

  const calculateInstallment = () => {
    let totalFinance = amount * (100 + interest) / 100 
    let newInstallment = totalFinance / period
    setInstallment(newInstallment)

    return newInstallment
  }

  return (
    <div>
      <div>
        <label htmlFor="amount">ระบุวงเงินกู้</label>
        <input type="number" value={amount} onChange={e => handleAmountChange(e)} />
      </div>
      <div>
        <label htmlFor="interest">ระบุอัตราดอกเบี้ย</label>
        <input type="number" step="0.1" value={interest} onChange={e => handleInterestChange(e)}/>
      </div>
      <div>
        <label htmlFor="period">ระยะเวลากู้ (เดือน)</label>
        <input type="number" value={period} onChange={e => handlePeriodChange(e)}/>
      </div>

      <div>
        <div>
          <label htmlFor="installment">ค่างวดเดือนละ</label>
          <input type="number" value={installment}/>
        </div>
      </div>
      
    </div>
  )
}

const app = document.getElementById('app')
ReactDOM.render(<App />, app)

