async function customPromiseAll<T>(promises: Promise<T>[]) {
    return new Promise((resolve, reject) => {
      let readyCount = 0
      const result: Array<T | null> = Array.from({length: promises.length}, (undefinedItem, index) => null)
      promises.forEach((prm, idx) => {
        prm.then(onresolve => {
          result[idx] = onresolve
          readyCount++
          if (readyCount === promises.length) resolve(result)
        },
        onreject => {
          reject(onreject)
        })
      }) 
    })
}


const promise1 = Promise.resolve(1);
const promise2 = Promise.reject('sdf');
const promise3 = Promise.resolve(3);

customPromiseAll([promise3, promise1, promise2])
  .then((results) => console.log(results)) 
  .catch((error) => console.error(error)); // sdf