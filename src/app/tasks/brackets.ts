const checkBrackets = (str: string) => {
  const brackets = { "(": ")", "[": "]" }
  const openBrackets: Array<"(" | "["> = []

  for (let char of str) {
    if (char in brackets) {
      openBrackets.push(char as ("(" | "["))
      continue
    }
    const lastBracket = openBrackets.pop()
    if (!lastBracket || brackets[lastBracket] !== char) {
      return false
    }
  }
  return !openBrackets.length
};

console.log(checkBrackets("[[((]]))")); // false
console.log(checkBrackets("[)")); // false
console.log(checkBrackets("))[[()()]]")); // false 
console.log(checkBrackets("[[]](((([[]]))))")); // true
console.log(checkBrackets("[]")); // true