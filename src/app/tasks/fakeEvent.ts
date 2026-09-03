// Написать класс EventEmmiter, аналог addeventlistener.
// Метод метод on, который вызывается в именем события и функцией
// Метод off, который вызывается также с названием события и функцией
// Метод emit, который триггерит все функции

type Callback = (value: string) => void

type TEvents = {
    [key: string]: Array<Callback>
}

class EventEmitter {
    private events: TEvents

    constructor() {
      this.events = {}
    }

    public on(eventName: string, callback: Callback) {
      if (!this.events[eventName]) this.events[eventName] = []
      if (!this.events[eventName].includes(callback)) this.events[eventName].push(callback)
    }

    public off(eventName: string, callback: Callback) {
      const event = this.events[eventName]
      if (!event || !event.includes(callback)) return
      const cbIdx = event.indexOf(callback)
      this.events[eventName].splice(cbIdx, 1)
    }

    public emit(eventName: string, param: string) {
      if (!this.events[eventName]) return
      this.events[eventName].forEach(cb => cb(param))
    }
}

// Пример использования
const myEventEmitter = new EventEmitter();

const greetListener = (name: string) => {
  console.log(`Hello, ${name}!`);
};

myEventEmitter.on("greet", greetListener);
myEventEmitter.emit("greet", "Alice"); // Output: Hello, Alice!

myEventEmitter.off("greet", greetListener);
myEventEmitter.emit("greet", "Bob"); // No output