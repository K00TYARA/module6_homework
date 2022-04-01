// Определяет является ли число простым или нет

function simpleNumber(x) {
    if (+x == x){
        x = +x
    } else {
        return "Данные неверны!";
    }
    if (x === 1){
        return "Число непростое";
    }
    else if (x > 1000 || x === 0) {
        return "Данные неверны!";
    } else {
        for (let i = 2; i < Math.sqrt(x); i++){
            if (x % i === 0){
                return "Число непростое";
            }
        }
        return "Число простое";
    }
}

console.log(simpleNumber((prompt())));