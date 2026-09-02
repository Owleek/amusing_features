/*Оплата за проживание в отеле
// Необходимо написать функцию расчета стоимости проживания посетителя в отеле
// Функция может принимать 2 аргумента
// 1. Количество ночей проживания в отеле (обязательный параметр)
// 2. Дата заселения (необязательный параметр). Если значение не указано, то отсчет ведется от текущего дня
*/

const prices = {
  weekday: 1500,
  holiday: 2200,
};

function bookingCalculate(count_of_days: number, move_in_date_string?: string): number {
    
    function isHoliday(date: Date): boolean {
      const day = date.getDay()
      return day === 0 || day === 6
    }

    function resetDate(date: Date) {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate())
    }

    let sum = 0
    let move_in_date = resetDate(new Date())

    if (!!move_in_date_string) {
      const decimal_date = Date.parse(move_in_date_string)
      if (isNaN(decimal_date)) throw new Error('Введите дату в формате: YYYY-MM-DD')
      move_in_date = resetDate(new Date(decimal_date))
    }

    for (let i = 0; i < count_of_days; i++) {
      const date = new Date(move_in_date);
      date.setDate(date.getDate() + i);
      sum += isHoliday(date) ? prices.holiday : prices.weekday
    }

    return sum
}

console.log(bookingCalculate(7)) // 11900
console.log(bookingCalculate(3, "2023-11-10")) // 5900

// Сначала думал одним вариантом решить, просто математическим численным способом, делением и тд, потом гибрид с массивом
// И в 3 варианте я решил что не нужно считать математику, надо максимально подумать о прикладной составляющей, так как 
// выходным днем может быть какой то еще день из календаря который я могу узнать только используя внешний ресурс 
// им выступает функция isHoliday которая должна узнавать откуда то
// С самого начала я не видел конечного точного алгоритма, я представлял первые несколько шагов, а уже после их 
// реализации смотря на код я менял свое мнение и пытался придумать другой способ
// таким образом первым вариантом я даже не стал дорешивать, 3 в итоге стал следствием второго
// итого на решение этой задачи у меня ушло 2часа и 30минут, катастрафически много, но что поделать, надо улучшать показатели
// или нет смысла ???