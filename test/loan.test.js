import calculateInstallment from "../lib/loan";

test('calculate for good installment', () => {
  const result = calculateInstallment(100000, 2, 48)
  expect(result).toBe(2125)
  expect(typeof(result)).toBe("number")
})

