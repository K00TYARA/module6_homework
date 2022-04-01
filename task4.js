// Функция принимает два числа и каждую секунду выводит число из интервала,
// начиная от первого и заканчивая вторым числом

function printNums(a, b){
    let num = a;
    let intervalId = setInterval(function (){
        console.log(num);
        if (num === b){
            clearInterval(intervalId);
        }
        num++;
    }, 1000)
}


printNums(5, 15);