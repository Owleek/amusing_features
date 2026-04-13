'use client'

const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const num = 28


const firstRange = 35
const secondRange = 54

const firstDigits = 7
const secondDigits = 1


const numbers = []

for (let i = 1; i <= num; i++) {
    let resultArray = generatorOfHappines(i)

    while (numbers.some(array => JSON.stringify(array) === JSON.stringify(resultArray))) {
        resultArray = generatorOfHappines(i)
    }

    numbers.push(resultArray)
}

function generatorOfHappines(i) {
    const firstPart = []
    const secondPart = random(1, secondRange)

    for (let j = 1; j <= firstDigits; j++) { // было i++
        let randomNumber = random(1, firstRange)

        while (firstPart.includes(randomNumber)) {
            randomNumber = random(1, firstRange)
        }

        firstPart.push(randomNumber)
    }

    return [...firstPart, secondPart] // убрал строку `${}`
}

const Happines = () => {
    
    return (
        <ul>
            {
                numbers.map(ar => <li>{ar.join(', ')}</li>)
            }
        </ul>
    )
}

export default Happines