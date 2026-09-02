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



// 3

// Имеется исходный массив плоских данных

// Необходимо преобразовать его в структуру,
// где данные будут сгруппированы по одному из полей (кроме id)
// Внутри сформированной группы должен лежать объект,
// ключами в которого должно стать поле (к примеру id)
// Значением должен быть объект из исходного массива с
// соответствующем полем id, не включая само поле id

type Country = "Russia" | "USA";

type User = {
  id: number;
  age: number;
  name: string;
  country: Country;
};

const data: Array<User> = [
  { id: 1, age: 20, name: "Иван", country: "Russia" },
  { id: 2, age: 20, name: "Дмитрий", country: "USA" },
  { id: 3, age: 20, name: "Алексей", country: "Russia" },
  { id: 4, age: 20, name: "Александр", country: "USA" },
  { id: 5, age: 20, name: "Иван", country: "Russia" },
];

type TResult = {
  [key in Country]: {
    [k: number]: Omit<User, "id">
  }
}

const result = {
  Russia: {
    1: { age: 20, name: "Иван", country: "Russia" },
    3: { age: 20, name: "Алексей", country: "Russia" },
    5: { age: 20, name: "Иван", country: "Russia" },
  },
  USA: {
    2: { age: 20, name: "Дмитрий", country: "USA" },
    4: { age: 20, name: "Александр", country: "USA" },
  },
};

const groupCountries = (arg: Array<User>) => {
  const innerResult: TResult = {} as TResult

  arg.forEach(elem => {
    const {id, ...rest} = elem
    if (!innerResult[elem.country]) innerResult[elem.country] = {}
    innerResult[elem.country][id] = {...rest}
  })

  return innerResult
};

console.log(JSON.stringify(groupCountries(data)))