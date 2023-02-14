// 1. Написать программу, которая через prompt считывает число
// и выводит в консоль число равное 10% от введенного числа

let inputNumber = prompt("Введите любое число:");
let result = inputNumber*0.1;
console.log(`10% от введенного числа ${inputNumber} = ${result}.`);

//------------------------------------------------------------

// 2. Написать программу, которая получает два числа и выводит наименьшее

const num1 = prompt("Введите первое число:");
const num2 = prompt("Введите второе число:");

if (num1 < num2) {
  console.log("Наименьшее число: " + num1);
} else {
  console.log("Наименьшее число: " + num2);
}

//------------------------------------------------------------

// 3. Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений:
// ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

const num = prompt("Введите число:");

if (num < 100) {
  console.log("Число меньше 100");
} else if (num > 100) {
  console.log("Число больше 100");
} else {
  console.log("Число равно 100");
}

// 4. Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, ’, если пользователь совершеннолетний, или ‘Hi, ’, если пользователь несовершеннолетний.

const name = prompt("Введите ваше имя:");
const age = prompt("Введите ваш возраст:");

if (age >= 18) {
  console.log("Hello, " + name + "!");
} else {
  console.log("Hi, " + name + "!");
}


// Дополнительные задания
// Создайте массив из строк, чисел, NaN и объектов. Пример: ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN]

let arr = ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN];

// Задача 1
// Пройдитесь по массиву циклом for и выведите в консоли, чем является каждый элемент массива: строкой, числом или ни тем, ни другим (используя функции isNaN и typeof).

for (let index = 0; index < arr.length; index++) {
  if (typeof arr[index] === 'string') {
    console.log(arr[index] + ' is a string');
  } else if (typeof arr[index] === 'number' && !isNaN(arr[index])) {
    console.log(arr[index] + ' is a number');
  } else if (typeof arr[index] === 'object') {
    console.log(arr[index] + ' is an object');
  } else {
    console.log(arr[index] + ' is not a string or number');
  }
}

// Задача 2
// Просуммируйте все числа в массиве и выведите результат в консоли. Игнорируйте нечисловые элементы.

let sum = 0;

for (let index = 0; index < arr.length; index++) {
  if (typeof arr[index] === 'number' && !isNaN(arr[index])) {
    sum += arr[index];
  }
}

console.log('все числа в массиве = ' + sum);
