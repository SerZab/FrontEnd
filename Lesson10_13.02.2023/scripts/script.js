// const value_1 = +prompt("Write first number")
// const value_2 = +prompt("Write second number")

// if (value_1 > value_2) {
//     console.log("Value1 is bigger than value2")
// } else if (value_1 < value_2) {
//     console.log("Value2 is bigger than value1")
// } else {
//     console.log("Value1 is equal value2")
// }

// const value = +prompt("Write any number")

// if (value > 0) {
//     console.log("Value is more than 0")
// } else if (value < 0) {
//     console.log("Value is less than 0")
// } else {
//     console.log("Value3 is equal 0")
// }
// const value = +prompt("Write a number")

// console.log(isNaN(value))
// console.log(isNaN("sjdjd"))
// console.log(isNaN("Nan"))

// const value = prompt("Напишите что нибудь")

// if (isNaN(value)) {
//     console.log("Данное значение нельзя преобразовать в число")
// } else {
//     console.log("Данное значение можно преобразовать в число")
// } 


//-----------------------------
// || = или, or
// && = и, and

// const value = prompt("Write a number")

// if (value < 0 || value > 0) {
//     console.log("Данное число не равно нулю")
// } else {
//     console.log("Данное число равно нулю")
// }


// const year = +prompt("Enter a year:")

// if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }

// Arrays ---------------

// const arr = [21, 32, 54, 54, 65, 453, 831]
// console.log(arr)
// arr.push(100, 200) // добавляет  элементы в конце
// console.log(arr)
// arr.pop() //удаляем 1 элемент в конце
// console.log(arr)
// arr.unshift(100, 20) // добавляет 1 элемент в начале
// console.log(arr)
// arr.shift() //удаляем элемент в начале
// console.log(arr)
// arr.splice(1,1) //добавления или удаления элементов в массиве (1 цифра с какого элемента, 2 цифра сколько элементов удалитъ)
// console.log(arr)
// arr.splice(1, 0, 10, 20, 30, 'привет', true) //добавления или удаления элементов в массиве (1 цифра с какого элемента, 2 цифра сколько элементов удалитъ, остальные цифры новые элементы массива)
// console.log(arr)

// const arr = []
// const value_1 = +prompt("Write a number")
// const value_2 = +prompt("Write a number")
// const value_3 = +prompt("Write a number")

// arr.push(value_1, value_2, value_3)
// console.log(arr)

// const arr = [1, 2, 3, 4, 5]
// const arr1 = []
// for (let i = 0; i < arr.length; i++){ arr1.push(arr[i] ** 2);   
// }
// console.log(arr1);

// let arr = [1, 2, 3, 4, 5];
// let arr1 = arr.map(element => element ** 2);
// console.log(arr1);

// const arr = [9, -15, 3, 4, 0, 5, -1, 20]
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 0) {
//     console.log(arr[i])
//   }
// }

// const arr3 = [9, -15, 3, 4, 5, -1, 4, -4, 20]
// const arr4 = arr3.filter(function(element) {
//     return element > 0;
//   });
//   console.log(arr4)

// for (let index = 0; index <= 20; index++) {
//     if (index % 2 !== 0){
//         console.log(index)
//     }
// } 

const arr = [9, -15, 3, 4, 5, -1, 4, -4, 20]
for (let index = arr.length - 1; index >= 0; index--) {
        console.log(arr[index])
} 