// 1
function quickSort(arr: number[]): number[] {
  if (!arr.length) return []

  const pivot = arr[Math.floor(arr.length / 2)]
  const left: number[] = []
  const right: number[] = []

  arr.forEach(num => {
    if (num < pivot) left.push(num)
    if (num > pivot) right.push(num)
  })

  return quickSort(left).concat(pivot, quickSort(right))
}

const tempasRr = [9, 19, 5, 32, 2, 0, 32, 4, 1, 56, 7]

console.log(quickSort(tempasRr))

// -------------------

// 2
function quickSort2(arr: number[]) {
  const _arr = [...arr]

  function _sort(innerArr: number[], left: number, right: number) {
    if (left >= right) return
    const middle = flip(innerArr, left, right)
    _sort(innerArr, left, middle)
    _sort(innerArr, middle + 1, right)
  }

  function flip(mutableArr: number[], left: number, right: number) {
    let i = left - 1
    let j = right + 1
    const pivotValue = mutableArr[Math.floor((left + right) / 2)]

    while(true) {
      do {i++} while(mutableArr[i] < pivotValue)
      do {j--} while(mutableArr[j] > pivotValue)
      if (i >= j) return j as number
      [mutableArr[i], mutableArr[j]] = [mutableArr[j], mutableArr[i]]
    }
  }

  _sort(_arr, 0, _arr.length - 1)
  return _arr
}

console.log(quickSort2(tempasRr))