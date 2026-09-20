// Декаратор функции, кеширование результата работы функции


const memo = <T extends unknown[], R>(func: (...rest: T) => R):((...rest: T) => R) => {

  const map = new Map<string, R>()

  return function (...rest) {
    const key = JSON.stringify(rest)

    if (map.has(key)) {
      console.log('retrieved from cache')
      return map.get(key)!
    }

    const result = func(...rest)

    map.set(key, result)

    return result
  }
}

const count = (a: number, b: number) => {
  console.log('function called')
  return a + b;
};

const memoCount = memo(count);

// console.log(memoCount(1, 2)); // 3 (вызов count)
// console.log(memoCount(3, 1)); // 4 (вызов count)
// console.log(memoCount(1, 2)); // 3 (обращение к cache)