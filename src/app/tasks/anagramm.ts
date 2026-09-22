// Группировка односоставных слов

// 1. Хитрый способ

const groupAnagrams = (arr: string[]) => {
    const obj: Record<string, string[]> = {}
    
    arr.forEach(str => {
      const keyStorage = [];
      
      for (let i = 0; i < str.length; i++) {
        keyStorage.push(str.charCodeAt(i))
      }

      const sum = keyStorage.reduce((acc, curr) => acc += curr, 0) + '';
      obj.hasOwnProperty(sum) ? obj[sum].push(str) : obj[sum] = [str]
    })

    return [...Object.values(obj)]
};


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]

// 2. Algo