// const div = document.querySelector("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = "black";

//==========================================

// div.addEventListener("mouseover", function () {  div.style.backgroundColor = "green"
//   });

// div.addEventListener("mouseout", function () {  div.style.backgroundColor = "black"
//   });

//==========================================

// const arr = []; // создаем пустой массив

// for (let index = 0; index < 20; index++) {
//   arr.push(Math.floor(Math.random() * 100)); // добавляем случайное число от 0 до 99 в массив
// }

// console.log(arr);

//==========================================
// }
// console.log(Math.floor(Math.random() * 10))

//==========================================

// const div = document.querySelector("div");
// div.style.width = "150px";
// div.style.height = "150px";
// div.style.border = "1px solid black";

// div.addEventListener("mouseover", function () {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   const rgb = `rgb(${r}, ${g}, ${b})`;
//   div.style.backgroundColor = rgb;
// });

// div.addEventListener("mouseout", function () {
//   div.style.backgroundColor = "white";
// });

//==========================================

// const mainDiv = document.querySelector('.main');

// for (let index = 0; index < 5; index++) {
//   const div = document.createElement('div');
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   div.style.width = "150px";
//   div.style.height = "150px";
//   div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

//   mainDiv.append(div);
// }

//==========================================

// const form = document.querySelector("form");
// form.addEventListener("submit", function (ev) {
//   ev.preventDefault();
//   console.log("Submitted");

//   const productName = document.querySelector("#productName");
//   const productPrice = document.querySelector("#productPrice");

//   console.log("productName: " + productName.value);
//   console.log("productPrice: " + productPrice.value);
// });

//==========================================

// const form = document.querySelector("form"); // выбираем для обработки поле Форма
// const products = []; // создаем пустой массив

// form.addEventListener("submit", function (ev) {
//   ev.preventDefault(); // на поле Форма навешивам событие "сбор данных 'submit'"

//   const productName = document.querySelector("#productName").value; //создаем переменную считывающую поле с формы productName
//   const productPrice = document.querySelector("#productPrice").value; //создаем переменную считывающую поле с формы productPrice

//   const newData = { name: productName, price: productPrice }; //создаем переменную с значениями введенными от пользователя
//   products.push(newData); //добавляет данные в пустой массив

//   console.log(products); // вывод в консоль
//   form.reset();
// });

//==========================================

function createProductCard(name, price) { // вынесли решение в функцию
  
  const productCardElem = document.createElement("div");
  const productTitleElement = document.createElement("h2");
  const productPriceElement = document.createElement("p");

  productTitleElement.innerText = name;
  productPriceElement.innerText = `${price} Euro`;

  productCardElem.append(productTitleElement);
  productCardElem.append(productPriceElement);

  return productCardElem;
}

//==========================================

const form = document.querySelector("form"); // выбираем для обработки поле Форма
const productsDiv = document.querySelector("#products");
const products = []; // создаем пустой массив

form.addEventListener("submit", function (ev) {
  ev.preventDefault(); // на поле Форма навешивам событие "сбор данных 'submit'"

  const productName = document.querySelector("#productName"); //создаем переменную считывающую поле с формы productName
  const productPrice = document.querySelector("#productPrice"); //создаем переменную считывающую поле с формы productPrice

  const newData = { name: productName.value, price: productPrice.value }; //создаем переменную с значениями введенными от пользователя
  products.push(newData); //добавляет данные в пустой массив

  const productCardElem = createProductCard(productName.value, productPrice.value)
  // const productCardElem = document.createElement("div");
  // const productTitleElement = document.createElement("h2");
  // const productPriceElement = document.createElement("p");
  // productPriceElement.innerText = productPrice.value;
  // productTitleElement.innerText = productName.value;
  // productCardElem.append(productTitleElement, productPriceElement);

  productCardElem.classList.add("card");
  productsDiv.append(productCardElem);

  form.reset();
});

//==========================================
// innerHTML
