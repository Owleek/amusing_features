function findSum(arr: number[], sum: number) {
    const combos: Array<string> = []
    const sortedArray = arr.splice(0).sort((a, b) => a - b)
    let currentIndex = 0
    let intrIndex = currentIndex + 1

    while (currentIndex <= arr.length - 2) {        
        const tempArr = [sortedArray[currentIndex], sortedArray[intrIndex]]
        const localSum = tempArr[0] + tempArr[1]
        const str = tempArr.join()

        if (localSum === sum && !combos.includes(str)) combos.push(str)

        if (intrIndex >= arr.length - 1) {
            currentIndex = currentIndex + 1
            intrIndex = currentIndex + 1
        }
    }

    return combos.map(combo => combo.split(','))
}



console.log(findSum([1, 2, 3, 4, 5, 5, 6, 7, 8], 9)) // [1, 8]


function findSum2(arr: number[], sum: number) { 
    const map = new Map()

    for (let i = 0; i < arr.length; i++) {
        const cur = arr[i]
        const neededNum = sum - cur

        if (map.has(neededNum)) {
            return [cur, neededNum]
        }

        if (!map.has(cur)) map.set(cur, i)
    }

    return []
}
