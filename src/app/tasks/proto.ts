// 1

const object = {
  firstName: "Bill",
  lastName: "Ivanov",

  sayLastName: () => {
    //@ts-ignore
    console.log(this.lastName);
  },

  sayName() {
    console.log(this.firstName);
  },
};

object.sayName(); // "Bill"
object.sayLastName(); // "Error - this is global/undefined" Объект не является блоком кода и не создает лексическое окружение

var b = object.sayName; // b присвается сам метод, функция свободная
b(); // функция вызывается без контекcта, Ошибка, нет this

object.sayName.bind({ firstName: "Cash" })(); // Cash
object.sayLastName.bind({ firstName: "Arrow" })(); // Error - this is global/undefined, в стрелке this берется при создании, привязать нельзя

object.sayName.bind({ firstName: "Name1" }).bind({ firstName: "Name2" }).bind({ firstName: "Name3" })(); // Name 1, к функции контекст привязывается 1 раз