const nominals = [5000, 1000, 500, 100, 50];
const limits = { 50: 10, 100: 10, 500: 10, 1000: 10, 5000: 10 };

function atm(amount: number, limits: any, nom = nominals) {
  const remainder = amount % nom[nom.length - 1]
  if (remainder !== 0) return "wrong amount"

  let reminderAmount = amount
  let resultObj: Record<string, number> = {}
  let i = 0

  while(i < nom.length) {
    const currentNominal = nom[i]
    let currentLimit = limits[currentNominal]
    if (reminderAmount < currentNominal || currentLimit === 0) { i++; continue }    

    let countOfNominals = 0

    const int = Math.floor(reminderAmount / currentNominal)

    if (currentLimit > int) {
      countOfNominals = int
      currentLimit -= int
    } else {
      countOfNominals = currentLimit
      currentLimit = 0
    }

    limits[currentNominal] = currentLimit
    resultObj[`${currentNominal}`] = countOfNominals
    reminderAmount -= countOfNominals * currentNominal

    if (reminderAmount === 0) return resultObj
    if (i === nom.length - 1) return "Not enought money, sorry"
    i++
  }

  return resultObj
}

console.log(atm(2350, limits)); // {50: 1, 100: 3, 1000: 2}
console.log(atm(11350, limits)); // {50: 1, 100: 3, 1000: 1, 5000: 2}
console.log(atm(777, limits)); // wrong amount
console.log(limits) //{ 50: 8, 100: 4, 500: 10, 1000: 7, 5000: 8 }