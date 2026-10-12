const somearr = [2, 5, 7, 1, 2, 4, 3, 5, 7, 9, 12] 
// @ts-ignore
Array.prototype.customReduce = function<T, K>(callback: (acc: K, curr: T) => K, initialValue: K) {
    let accamulator = initialValue
    this.forEach((el: T) => { accamulator = callback(accamulator, el) })
    return accamulator
}

// const sum = somearr.customReduce((acc, curr) => acc + curr, 0) 57