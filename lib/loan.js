export default function calculateInstallment(amount, interest, months) {
  const amountValue   = amount === '' ? 0 : amount
  if (interest < 0) {
    return 0
  }
  const interestValue = interest === '' ? 0 : interest

  let totalFinance = parseInt(amountValue) * (100 + parseFloat(interestValue)) / 100 
  return parseInt(parseFloat(totalFinance / parseInt(months)).toFixed(0))
}
