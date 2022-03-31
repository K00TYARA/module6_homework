// Считает количество четных, нечетных, нулевых и других значений массива. Записано в функцию

function countElements(){


    let arr = [0, 1, 12, 23, 15, 0, null, 66, "19", 22, 0, 101, "Hello", 112, 0, 111, 0, 0]
    let oddNums = 0;
    let evenNums = 0;
    let nanNums = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === "number") {
            if (isNaN(arr[i])) {
                nanNums++;
            } else if (arr[i] === 0){
                zero++;
            } else if (arr[i] % 2 === 0){
                evenNums++;
            } else {
                oddNums++;
            }
        } else {
            nanNums++;
        }
    }

    console.log(`Четных: ${evenNums}`);
    console.log(`Нечетных: ${oddNums}`);
    console.log(`Нулей: ${zero}`);
    console.log(`Не чисел: ${nanNums}`);
}

countElements();