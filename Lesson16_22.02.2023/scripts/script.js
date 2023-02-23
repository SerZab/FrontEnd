// const div = document.querySelector("div");
// div.classList.add("box", "box1", "box2"); //Добавляет новый класс
// div.classList.add("main"); //Если есть, то не добавляет новый класс
// div.classList.remove("root", "box1", "box2"); // удаляет

// div.classList.toggle("root"); //Если есть класс, то удаляет. Если нет то добавляет такой класс

// div.classList.contains("root"); //проверяет на наличие класса

// div.classList.replace("main", "container"); // заменяет указанный класс на другой
// console.log(div.classList);

// const addColor = document.querySelector("#addColor");
// addColor.addEventListener("click", function () {
//   div.classList.add("active");
// });
// const removeColor = document.querySelector("#removeColor");
// removeColor.addEventListener("click", function () {
//   div.classList.remove("active");
// });

//=========================================================

// const div = document.querySelector(".box");
// const button = document.querySelector("#toggleColor");

// button.addEventListener("click", function () {
//   div.classList.toggle("active");
// });

// const div = document.querySelectorAll(".card");

// for (let index = 0; index < div.length; index++) {
//   const card = div[index]

//   card.addEventListener("click", function () {
//     card.classList.toggle("active");
//   })
// }

//=========================================================

// const cards = document.querySelector("#cards");

// for (let index = 0; index < 10; index++) {
//   const cardDiv = document.createElement("div");
//   cardDiv.innerText = index;
//   cardDiv.classList.add("card");
//   cardDiv.addEventListener("click", function () {
//     cardDiv.classList.toggle("active");
//   });
//   cards.append(cardDiv);
// }

//=========================================================

let words = [
  { en: "cat", ru: "кошка" },
  { en: "dog", ru: "собака" },
  { en: "bird", ru: "птица" },
  { en: "tree", ru: "дерево" },
  { en: "flower", ru: "цветок" },
];

let cards = document.querySelector("#cards");

const ruP = []
const enP = []
const ruBtn = document.querySelector('#ru')
const enBtn = document.querySelector('#en')

for (let index = 0; index < words.length; index++) {
  const { en, ru } = words[index]; //деструктуризация (выбор элементов и добавление в индекс цикла)
  const russian = document.createElement("p");
  russian.innerText = ru;
  ruP.push(russian)

  const english = document.createElement("p");
  english.innerText = en;
  english.classList.add("hidden");
  enP.push(english)
  const card = document.createElement("div");
  card.classList.add("card");
  card.append(russian, english)

  // card.addEventListener('click', function(){
  //   russian.classList.toggle('hidden')
  //   english.classList.toggle('hidden')
  // })
  cards.append(card)
}

ruBtn.addEventListener('click', function(){
  for (let index = 0; index < words.length; index++) {
    ruP[index].classList.remove('hidden')
    enP[index].classList.add('hidden')
  }
})
enBtn.addEventListener('click', function(){
  for (let index = 0; index < words.length; index++) {
    enP[index].classList.remove('hidden')
    ruP[index].classList.add('hidden')
  }
})
