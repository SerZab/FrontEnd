// Lesson 13

// function createP(text) {
//     const p = document.createElement('p');
//     p.innerText = text;
//     return p;
//   }

//   const paragraphs = ['Day1', 'Day2', 'Day3', 'Day4'];
//   const div = document.querySelector("div.main");

// for (let index = 0; index < paragraphs.length; index++) {
//     div.append(createP(paragraphs[index]));
//   }

// Запрос и вывод в консоли ссылки и картинки
// const urlToPost = prompt("Give url to Post:")
// const imgUrl = prompt('Give url to img')

// const newImg = document.createElement('img')
// newImg.setAttribute('src', imgUrl)

// const newA = document.createElement('a')
// newA.innerText = "Url to Post"
// newA.setAttribute("href", urlToPost)
// const div = document.querySelector('div.main')
// div.append(newA, newImg)

// const products = [
//   {
//     name: "Laptop",
//     img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWBrzy?ver=85d4&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
//     unitPrice: 450,
//     count: 10
//   },
//   {
//     name: "Laptop HP",
//     img: "https://m.media-amazon.com/images/I/81B-AfJtsGL._AC_SX679_.jpg",
//     unitPrice: 550,
//     count: 3
//   },
//   {
//     name: "Notebook",
//     img: "https://www.lidl.de/assets/65cf83eec71564caabed0af5614cbcd1.jpeg",
//     unitPrice: 280,
//     count: 8
//   },
// ];
// function newParagraph(text) {
//   const p = document.createElement("p");
//   p.innerText = text;
//   return p;
// }
// function newImg(srcValue) {
//   const img = document.createElement("img");
//   img.setAttribute("src", srcValue);
//   return img;
// }

// const mainDiv = document.querySelector("div.main");
// let totalPrice = 0
// let totalCount = 0

// for (let index = 0; index < products.length; index++) {
//   const { name, img, unitPrice, count } = products[index];
//   // const p = document.createElement("p");
//   // p.textContent = products[index].name;
//   const p = newParagraph(name);
//   const pInfo = newParagraph(`${unitPrice}$ - ${count} units`)

//   // const img = document.createElement("img");
//   // img.src = products[index].img;
//   const newImgElem = newImg(img);

//   const div = document.createElement("div");
//   // productDiv.append(p);
//   // productDiv.append(img);
//   div.append(p, newImgElem, pInfo);
//   mainDiv.append(div);

//   totalCount += count
//   totalPrice += unitPrice * count
// }
// const productsInfo = newParagraph(`Count of all products: ${totalCount}. Total price: ${totalPrice}`)
// mainDiv.append(productsInfo)

// ===================================================


// function beautyPrint(result){
//   console.log(`Значение result: ${result}`)
// }
// function sum (a, b, c){
// return c(a*b)
// }
// sum(5, 3, beautyPrint) 

// function sum(a, b, p) {
// return a+b
// }

// function divide(result) {
//   return result / 2;
// }

// sum(3, 5, divide);

function sum(a, b, callback) {
  return callback(a+b);
}

function printResult(result) {
  console.log('Результат сложения: ' + result);
}

sum(2, 3, printResult); // вызов функции sum и передача ей аргументов и функции printResult в качестве callback функции