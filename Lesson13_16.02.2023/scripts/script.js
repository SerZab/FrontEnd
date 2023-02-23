// DOM = Document Object Model

// const pValue = document.querySelector('p')
// console.log(pValue.innerText)
// pValue.innerText = 'Hello World'
// console.log(pValue.innerText)

// const paragraghs = document.querySelectorAll('p')
// console.log(paragraghs)

// for (let index = 0; index < paragraghs.length; index++) {
//   console.log(paragraghs[index].innerText) 
// }
// const pp = document.querySelector('.main .info_1')
// pp.innerText = 'Hello World!'

// const paragraphs = document.querySelectorAll(".info_1");

// const newArray = [];
// for (let index = 0; index < paragraphs.length; index++) {
//   newArray.push(paragraphs[index].textContent);
// }
// console.log(newArray);

// const img = document.querySelector('img')
// img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm81XoZa9dFFAFPY-LjxgJ-XAj-KeySicSvw&usqp=CAU')
// img.setAttribute('alt', 'new photo')
// const img1 = document.querySelector('img.photo')
// img1.setAttribute('src', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg')

// const images = document.querySelectorAll('.main img');

// for (let i = 0; i < 5; i++) {
//   images[i].setAttribute('src', 'https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg');
// }
// const divv = document.querySelector('.main')
// const pp = document.createElement('p')
// pp.innerText = 'Hello world!!!'
// divv.prepend(pp) //добавляет элемент в блок до первого подобного элемента
// divv.append(pp) //добавляет элемент в блок после последнего подобного элемента

const paragraphs = ['Day1', 'Day2', 'Day3', 'Day4'];

const div = document.querySelector('#main'); //доступ к селектору

for (let index = 0; index < paragraphs.length; index++) {
  const p = document.createElement('p');

  p.innerText = paragraphs[index];

  div.append(p);
}


function createP(text) {
  const p = document.createElement('p');
  p.innerText = text;
  return p;
}

const arr = []

