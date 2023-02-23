// function printResult(result) {
//   console.log(`Результат сложения: ${result}`);
// }

// function sum(a, b, callback) {
//   return callback(a+b);
// }

// sum(2, 3, printResult);

// const arr = [1, 2, 3, 4, 5]

// function forEach(arr, callback){
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//     callback(arr[i])
//   }
// }

// function pow(a) {
//   console.log(a ** 2)
// }
// function cube(a) {
//   console.log(a ** 3)
// }

// forEach(arr, pow )
// forEach(arr, cube)

// const paragraph = document.querySelector("p");

// function clickHandler() {
//   console.log("Clicked");
// }
// paragraph.addEventListener("click", clickHandler);

// ======== Браузерные события ===========

// const btn = document.querySelector("#incr");
// const btn1 = document.querySelector("#decr");
// const paragraph = document.querySelector("p");
// let count = 0;

// function clickPlus() {
//   count++
//   paragraph.innerText = count
//   // paragraph.innerText = +paragraph.innerText + 1;
// }
// function clickMinus() {
//   count--
//   paragraph.innerText = count
// }

// btn.addEventListener("click", clickPlus);
// btn1.addEventListener("click", clickMinus);

// const paragraph = document.querySelector("p");
// function clickHandler(event) {
//   console.log(event);
//   paragraph.innerText += event.key;
// }
// document.addEventListener("keydown", clickHandler);

// const paragraphs = [
//   "Первый параграф",
//   "Второй параграф",
//   "Третий параграф",
//   "Четвертый параграф",
// ];

// const div = document.querySelector("div.main");

// for (let index = 0; index < paragraphs.length; index++) {
//   const newP = document.createElement("p");
//   newP.innerText = paragraphs[index];
//   newP.addEventListener("click", function() {
//     newP.innerText = "******";
//   });
// }

const images = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg', 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg', 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg', 'https://static8.depositphotos.com/1385248/876/i/450/depositphotos_8762333-stock-photo-dramatic-clouds-with-mountain-and.jpg','https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042868_26.jpg'];

const thumbthnailsDiv = document.querySelector('#thumbsnail') //создаем селектор для div 1
const previewDiv = document.querySelector('#preview') //создаем селектор для div 2
const emptyImgElement = document.createElement('img') //создаем пустую картинку и помещаем в переменную 
previewDiv.append(emptyImgElement) // добавляем пустую картинку в div preview

let currentIndex = 0; 
emptyImgElement.setAttribute('src', images[currentIndex]);

emptyImgElement.addEventListener('click', function() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  emptyImgElement.setAttribute('src', images[currentIndex]);
});

for (let index = 0; index < images.length; index++) {
  const newImgElement = document.createElement('img')
  newImgElement.setAttribute("src", images[index])
  newImgElement.addEventListener("click", function() {
    emptyImgElement.setAttribute("src", images[index])
  })
  thumbthnailsDiv.append(newImgElement)
}

