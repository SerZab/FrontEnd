// let arr = [1, 100, 65, 5, 6, 5, 4, 2, 1, 9, 51, 42, 41, 100]
// let sumOfElements = 0;

// for (let index = 0; index <arr.length; index++) {
//         sumOfElements += arr[index]
// }
// console.log(sumOfElements)

// let arr = [1, 7, 65, 5, 6, 5, 4, 2, 1, 9, 51, 42, 41, 100]
// let count = 0;

// for (let index = 0; index <arr.length; index++) {
//         if (arr[index] > 0) {
//                 count += arr[index]
// }
// console.log(count)


// const arr = [1, 100, 65, 5, 6, 5, 4, 2, 1, 9, 51, 42, 41, 100];
// let evenSum = 0;
// let oddSum = 0;

// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] % 2 === 0) {
//     evenSum += arr[index];
//   } else {
//     oddSum += arr[index];
//   }
// }
// const diff = evenSum - oddSum;

// console.log(`Сумма четных чисел: ${evenSum}`);
// console.log(`Сумма нечетных чисел: ${oddSum}`);
// console.log(`Разница между суммой четных и нечетных чисел: ${diff}`);

// const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (let index = 0; index < arr1.length; index++) {
//   if (arr1[index] == index) {
//     sum += arr1[index]
//   }
// }
// console.log(`Сумма элементов, значение которых равно их индексу: ${sum}`)

//==========================================

// const person = ["John", "Smith", 37, 175]
// console.log(`Name: ${person[0]}`)
// console.log(`Surname: ${person[1]}`)
// console.log(`Age: ${person[2]}`)
// console.log(`Heigt: ${person[3]}`)

// const person = {
//         name: "John",
//         surname: "Smith",
//         age: 37,
//         height: 175
// }
// console.log(`Name: ${person['name']}`)
// console.log(`Surname: ${person['surname']}`)
// console.log(`Age: ${person['age']}`)
// console.log(`Heigt: ${person['height']}`)
// person.proffesion = "programmier"
// console.log(person)

// const product = {
//         name: 'Chocolate',
//         price: 1.25,
//         currency: 'euro',
//         weight: 100,
//         color: 'black',
//         inStock: true
//       };
      
//       console.log(product);

// const products = [
//         {
//                 name: 'Chocolate',
//                 price: 1.25,
//                 currency: 'euro',
//                 weight: 100,
//                 color: 'black',
//                 inStock: true,
//                 discount: 17
//         },
//         {
//                 name: 'Brot',
//                 price: 0.70,
//                 currency: 'euro',
//                 weight: 750,
//                 color: 'white',
//                 inStock: false,
//                 discount: 20
//         },
//         {
//                 name: 'Milch',
//                 price: 1.15,
//                 currency: 'euro',
//                 weight: 1000,
//                 color: 'white',
//                 inStock: true,
//                 discount: 12
//         }
// ]
// // for (let index = 0; index < products.length; index++) {
// //         console.log(`Price of product ${products[index].name} is ${products[index].price}`)
// // }
// let sum = 0;
// for (let index = 0; index < products.length; index++) {
//         const {name, price, discount} = products[index]
//         console.log(`Price of ${name} is ${price - price*discount/100}`)
//         sum += price - (price * discount / 100)
// }
// console.log(`Total price: ${sum}`)


let products = [
        {
          name: 'Product 1',
          type: 'sport'
        },
        {
          name: 'Product 2',
          type: 'electronic'
        },
        {
          name: 'Product 3',
          type: 'electronic'
        },
        {
          name: 'Product 4',
          type: 'sport'
        }
      ];


const newProduct = [];
for (let index = 0; index < products.length; index++) {
        if (products[index].type === 'sport') {
                newProduct.push(products[index]);
        }
      }
console.log(newProduct)