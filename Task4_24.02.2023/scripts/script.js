// 1. Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему.
function task1(a, b) {
  const result = [];
  let min;
  let max;
  if (a < b) {
    min = a;
    max = b;
  } else {
    min = b;
    max = a;
  }
  for (let index = min; index <= max; index++) {
    result.push(index);
  }
  return result;
}

const test1 = task1(1, 12);
console.log(test1);

const test2 = task1(0, 10);
console.log(test2);

const test3 = task1(20, 1);
console.log(test3);

console.log("====================");
//=====================================

const word = "abracadabra";

let result = "";
for (let index = word.length - 1; index >= 0; index--) {
  result += word[index];
}
console.log(result);

console.log("====================");
//=======================================
function reverse(word) {
  let result = "";
  for (let index = word.length - 1; index >= 0; index--) {
    result += word[index];
  }
  return result;
}

function task8(wordArgument) {
  const reverseArg = reverse(wordArgument);
  if (wordArgument === reverseArg) {
    return true;
  } else {
    return false;
  }
}

const test5 = task8("abc");
console.log(test5);
const test6 = task8("abccba");
console.log(test6);

console.log("====================");
//=======================================

let sum = 0;

for (let i = 0; i <= 50; i++) {
  if (i % 5 === 0) {
    sum += i;
  }
}

console.log(sum);
console.log("====================");
//=====================================

for (
  let index = 0;
  index <= 10;
  console.log(`index - ${index}`) || (index += 2)
) {}
console.log("====================");
//=====================================

const user = {
  firstname: "Ivan",
  lastname: "Ivanov",
  age: 20,
  salary: 3500,
  currency: "Euro",
  profession: "BackEnd developer",
};

const message = [
  "Users name is",
  user.firstname,
  user.lastname,
  ". He is",
  user.age,
  "years old. And he has salary of ",
  user.salary,
  user.currency,
  "as a ",
  user.profession,
].join(" ");
console.log(message);

console.log("====================");
//=====================================

function printEvNb(a, b) {
  // определяем максимальное
  let max = a > b ? a : b;
  let min = a > b ? b : a;

  // перебираем числа от макс до мин
  for (let index = max; index >= min; index--) {
    // если число четное, выводим его в консоль
    if (index % 2 === 0) {
      console.log(index);
    }
  }
}
printEvNb(2, 10);
printEvNb(12, 4);

console.log("====================");
//=====================================
// Теорема Пифагора, через функцию
function pow(a, b = 2) {
  return a ** b;
}

console.log(pow(pow(6) + pow(8), 0.5));

console.log("====================");
//=====================================

function sumAtoN(a, n) {
  return (n - a + 1) * (a + n) / 2;
}

console.log(sumAtoN(1,10)); //55
console.log(sumAtoN(2,5)); //14
console.log(sumAtoN(8,10)); //27
