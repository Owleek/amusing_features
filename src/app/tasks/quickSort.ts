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