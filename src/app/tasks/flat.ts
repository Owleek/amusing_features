// 1. Рекурсия
const sourceArray = [[[1, [2]], [3, 4], [[5, [6]]], 7, 8]]

type DeepArr<T> = Array<T | DeepArr<T>>

const flatR = <T>(arr: DeepArr<T>): T[]  => {
   const result: T[] = []

   const innerFlat = (element: T | DeepArr<T>) => {
        if (Array.isArray(element)) {
            element.forEach(el => innerFlat(el))
        } else result.push(element)
   }

   arr.forEach(element => innerFlat(element))
   
   return result
};

console.log(flatR(sourceArray)); // [1,2,3,4,5,6,7,8]

// 2. Стек 

const flat = <T,>(arr: DeepArr<T>): T[] => {
    const result: T[] = []
    const stack: DeepArr<T> = []

    // В Данном случае мы проходим по каждому элементу и наполняем стек слева на право
    // Тут нет никакой лишней операции
    const reverseAndPushToStack = (array: DeepArr<T>) => {
      for (let i = arr.length - 1; i >= 0; i--) {
        stack.push(arr[i])
      }
    }

    reverseAndPushToStack(arr)

    while(stack.length) {
      const el = stack.pop()!
      if (Array.isArray(el)) reverseAndPushToStack(arr)
      else result.push(el)
    }

    return result
};

console.log(flat(sourceArray)); // [1,2,3,4,5,6,7,8]