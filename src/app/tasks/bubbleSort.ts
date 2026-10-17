function sortBubble(arr: number[]) {
  const _arr = [...arr]
  let count = _arr.length - 1
  let last = _arr.length - 1

  for (let i = 0; i < count; i++) {
    for (let j = 0; j < last; j++) {
      const curr = _arr[j]
      const next = _arr[j + 1]
      if (curr < next) continue
      _arr[j] = next
      _arr[j + 1] = curr
    }

    last--
  }

  return _arr
}

const tempARr = [9, 19, 5, 32, 2, 0, 32, 4, 1, 56, 7]

console.log(sortBubble(tempARr))