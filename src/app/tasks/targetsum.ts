function findSum (arr: number[], sum: number) {
    const map = new Map()
    let result: null | number[] = null

    arr.forEach(num => {
        const delta = sum - num
        if (delta <= 0) return
        if (!map.has(num)) map.set(num, "")
        if (map.has(delta)) {
            result = [delta, num]
        }
    })
    
    return result
}

const temp = [2, 1, 3, 4, 5, 7, 8, 12, 23, 11, 12, 25, 23, 9, 13]

console.log(findSum(temp, 10))