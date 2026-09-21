// 1. Рекурсия

const flatR = <T extends unknown[]>(arr: T): T  => {
   const result: unknown[] = []

   const innerFlat = (element: unknown) => {
        if (!Array.isArray(element)) {
            result.push(element)
        } else element.forEach(el => innerFlat(el))
   }

   arr.forEach(element => innerFlat(element))
   
   return result as T
};

console.log(flatR([1, 2, [3, 4], [[5, [6]]], 7, 8])); // [1,2,3,4,5,6,7,8]

// 2. Стек / Очередь