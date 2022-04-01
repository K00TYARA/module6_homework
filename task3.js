// Функция, которая принимает число как аргумент и возвращает функцию, которая
// также принимает число как аргумент и возвращает сумму этих двух чисел


function firstNum(a){
    return function secondNum(b){
        return a + b;
    }
}

const resultSum = firstNum(+prompt("Введите первое число:"));

console.log(`Сумма равна: ${resultSum(+prompt("Введите второе число"))}`);