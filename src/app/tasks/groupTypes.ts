// 1. Вернуть объект с ключами type из масива,
// значение - массив элементов с таким type

// 2. Вернуть объект с ключами type, а значение - объект
// вида {count: количество, weight: суммарный вес}

const arr = [
  { type: "banana", weight: 32 },
  { type: "apple", weight: 24 },
  { type: "kiwi", weight: 55 },
  { type: "banana", weight: 44 },
  { type: "orange", weight: 5 },
  { type: "kiwi", weight: 12 },
];

const groupByType = (arg: typeof arr) => {
  const map = new Map()

  arg.forEach(elem => {
    if (map.has(elem.type)) map.set(elem.type, [...map.get(elem.type), elem])
    else map.set(elem.type, [elem])
  })

  arg.forEach(elem => {
    if (map.has(elem.type)) {
      const foundElem = map.get(elem.type)
      map.set(elem.type, {count: foundElem.count + 1, weight: foundElem.weight + elem.weight})
    } 
    else map.set(elem.type, {count: 1, weight: elem.weight})
  })

  return Object.fromEntries(map)
};

console.log(JSON.stringify(groupByType(arr)))