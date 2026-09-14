// 0

// const object = {
//   firstName: "Bill",
//   lastName: "Ivanov",

//   sayLastName: () => {
//     //@ts-ignore
//     console.log(this.lastName);
//   },

//   sayName() {
//     console.log(this.firstName);
//   },
// };

// object.sayName(); // "Bill"
// object.sayLastName(); // "Error - this is global/undefined" Объект не является блоком кода и не создает лексическое окружение

// var b = object.sayName; // b присвается сам метод, функция свободная
// b(); // функция вызывается без контекcта, Ошибка, нет this

// object.sayName.bind({ firstName: "Cash" })(); // Cash
// object.sayLastName.bind({ firstName: "Arrow" })(); // Error - this is global/undefined, в стрелке this берется при создании, привязать нельзя

// object.sayName.bind({ firstName: "Name1" }).bind({ firstName: "Name2" }).bind({ firstName: "Name3" })(); // Name 1, к функции контекст привязывается 1 раз

// // 1


// class Person {
//   public name: string

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const juan = new Person("Juan");

// Person.prototype = {
//   //@ts-ignore
//   getName: function () {
//     return this.name;
//   },
// };

// const pedro = new Person("Pedro");
// //@ts-ignore
// console.log(pedro.getName()); // Pedro
// //@ts-ignore
// console.log(juan.getName());  // prototype просто ссылка на внутренний созданный объект
// // а на момент создания, в его prototype не было getName


// 2

// let obj = {
//   name: "David",
//   getName() {
//     console.log(`name is: ${this.name}`);
//   },
// };

// let fn = obj.getName;

// fn(); // при 'strict' TypeError: can't read prop of undefined reading name
// без 'strict' - undefined

// 3

// let obj1 = {
//   name: "User 1",
//   getName() {
//     console.log(`name is: ${this.name}`);
//   },
// };

// let obj2 = {
//   name: "User 2",
//   getName() {
//     console.log(`name is: ${this.name}`);
//   },
// };

// let fn = obj1.getName.bind(obj2).bind(obj1);

// fn(); // name is "User 2 так как контекст привязывается единожды

// 4

// const person = { name: "Vasya", age: 22 };
// const position = { title: "Software Engineer" };

// person.position = position;
// person.position.salary = 120;

// console.log(person.position === position); // true


// 5
// function foo() {
//   const x = 10;

//   return {
//     x: 20,

//     bar() {
//       console.log(this.x);
//       return "end"
//     },

//     baz: () => {
//       //@ts-ignore
//       console.log(this.x);
//       return "end"
//     },
//   };
// }

// const obj1123123123 = foo();
// obj1123123123.bar(); // 20
// obj1123123123.baz(); // undefined

// console.log('------------')

// const obj23546456456435 = foo.call({ x: 30 });
// let y = obj23546456456435.bar; 
// let x = obj23546456456435.baz; 

// y(); // undefined
// x(); // 30

// console.log('------------')

// obj23546456456435.bar(); // 20
// obj23546456456435.baz(); // 30


// 6

// class Animal {
//   name: string

//   constructor(name: string) {
//     this.name = name;
//   }

//   sound() {
//     console.log("Some sound");
//   }
// }

// class Dog extends Animal {
//   breed: string

//   constructor(name: string, breed: string) {
//     super(name);
//     this.breed = breed;
//   }

//   bark() {
//     console.log("Woof woof!");
//   }
// }

// let myDog = new Dog("Buddy", "Labrador");

// console.log(myDog.hasOwnProperty("name")); // true
// console.log(myDog.hasOwnProperty("sound")); // false

// console.log("name" in myDog); // true
// console.log("sound" in myDog); // true

// console.log(myDog)

// // {
// //   name: "Buddy",
// //   "breed": "Labrador"
// // }

// // наследующий класс ожидает что объект this создаст класс от которго наследуется
// // таким образом в инстанс попадут все свойства что создавались через this в конструкторе и они будут личными
// // все остальные попадают в прототипы
