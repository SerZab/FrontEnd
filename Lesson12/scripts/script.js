function getName() {
  const name = prompt('Write your name')
  console.log(name);
}
// getName()

function checkNumber() {
  const number = prompt("Введите число:");
  if (number % 2 === 0) {
    console.log("Да");
  } else {
    console.log("Нет");
  }
}
// checkNumber()

function print(str) {
  console.log(str)
}
function getMax(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
// getMax(3, 4)


// function power(a, b=2) {
//   let result = a**b
//   return result
// }
// let result = power(5, 4)
// c


// console.log(power(power(4) + power(3), 0.5))

function check(a) {
  return !(a % 2)
}

// console.log(check(5))

// function createArr(num) {
//   let result = [];
//   for (let index = 0; index < num; index++) {
//     result.push(index);
//   }
//   return result;
// }

// const getArray = createArr

// console.log (getArray(20))
// console.log (getArray(100))

// console.log (createArr(20))
// console.log (createArr(100))

const power = function(a, b=2) {
  return a**b
}
console.log (power(power(3) + power(4),0.5))
cout = console.log
const obj = {
  print: console.log
}
obj.print(123)
obj.print(120)
obj.print(10)
cout(2000)

const createArr = function (a, b) {
  let result = [];
  for (let index = a; index <= b; index++) {
    result.push(index);
  }
  return result;
}
console.log (createArr(3, 10))