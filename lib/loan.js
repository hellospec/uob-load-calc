export default function calculateInstallment(amount, interest, months) {
  const amountValue   = amount == '' ? 0 : amount
  if (interest < 0) {
    return 0
  }

  let totalFinance = parseInt(amountValue) * (100 + parseFloat(interest)) / 100 
  return parseInt(parseFloat(totalFinance / parseInt(months)).toFixed(0))
}
