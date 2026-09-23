// Группировка односоставных слов

// Неверное решение, сумма разных может давать одинаковую сумму

const WronggroupAnagrams = (arr: string[]) => {
    const obj: Record<string, string[]> = {}
    
    arr.forEach(str => {
      const keyStorage = [];
      
      for (let i = 0; i < str.length; i++) {
        keyStorage.push(str.codePointAt(i))
      }

      const sum = keyStorage.reduce((acc, curr) => acc! += curr!, 0) + '';
      obj.hasOwnProperty(sum) ? obj[sum].push(str) : obj[sum] = [str]
    })

    return [...Object.values(obj)]
};


// Правильное решение

const groupAnagrams = (arr: string[]) => {
    const result: Record<string, string[]> = {}

    arr.forEach(stringValue => {
      const sortedString = stringValue.split('').sort().join('')
      result[sortedString] ? result[sortedString].push(stringValue) : result[sortedString] = [stringValue]
    })

    return Object.values(result)
};

console.log(groupAnagrams(["eat", "tea", "eettttaaaa", "tan", "ate", "nat", "bat"]));