// 1. Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

const kvadrat = document.createElement("div");
kvadrat.style.backgroundColor = "red";
kvadrat.style.width = "200px";
kvadrat.style.height = "200px";
document.body.append(kvadrat);

const btn = document.createElement("button");
btn.innerText = "Change square and color";
document.body.append(btn);

function changeSquare() {
  if (kvadrat.style.backgroundColor === "green") {
    kvadrat.style.backgroundColor = "red";
    kvadrat.style.width = "200px";
    kvadrat.style.height = "200px";
  } else {
    kvadrat.style.backgroundColor = "green";
    kvadrat.style.width = "100px";
    kvadrat.style.height = "100px";
  }
}
btn.addEventListener("click", changeSquare);



// 2. Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

// Создаем новый div и добавляем его на страницу
const newDiv = document.createElement("div");
document.body.append(newDiv);

// Создаем квадрат и устанавливаем ему размеры и цвет фона
const square = document.createElement("div");
square.style.width = "200px";
square.style.height = "200px";
square.style.backgroundColor = "pink";
newDiv.append(square);

// Создаем кнопку и добавляем ее в div
const btn1 = document.createElement("button");
btn1.innerText = "Change color";
newDiv.append(btn1);

function newColor() {
  //вынес в функцию изменение цвета
  if (square.style.backgroundColor === "pink") {
    square.style.backgroundColor = "blue";
  } else {
    square.style.backgroundColor = "pink";
  }
  console.log("New color is: " + square.style.backgroundColor); // выводим в консоль цвет квадрата
}

// Добавляем обработчик событий на клик по кнопке
btn1.addEventListener("click", newColor);



// 3. Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

// Создаем кнопку и добавляем ее на страницу
const btn2 = document.createElement("button");
btn2.innerText = "Change square size";
document.body.appendChild(btn2);

// Создаем квадрат и устанавливаем ему размеры и цвет фона
const square1 = document.createElement("div");
square1.style.width = "150px";
square1.style.height = "150px";
square1.style.backgroundColor = "gray";
document.body.append(square1);

function resizeSquarе() {
  // Получаем текущие значения высоты и ширины квадрата
  const currentH = parseInt(square1.style.height, 10);
  const currentW = parseInt(square1.style.width, 10);
  // Увеличиваем высоту и ширину на 20px
  square1.style.height = currentH + 20 + "px";
  square1.style.width = currentW + 20 + "px";
}
// Добавляем обработчик событий на клик по кнопке
btn2.addEventListener("click", resizeSquarе);



// 4. Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.

// Создаем новую линию и добавляем ее на страницу
const hr = document.createElement("hr");
document.body.append(hr);

// Создаем кнопку и добавляем ее на страницу
const btn3 = document.createElement("button");
btn3.innerText = "Добавить параграф";
document.body.append(btn3);

// Создаем div с классом root и добавляем его на страницу
const root = document.createElement("div");
root.className = "root";
document.body.append(root);

function createParagraph() {
  // Создаем параграф синего цвета и добавляем его в div
  const p = document.createElement("p");
  p.innerText =
    "Параграфы – основной способ разделять большой текст на небольшие логические блоки. Эти блоки автоматически «отбиваются» друг от друга отступами. Такой текст намного проще читается и не пугает пользователей.";
  p.style.color = "blue";
  root.append(p);
}
// Добавляем обработчик событий на клик по кнопке
btn3.addEventListener("click", createParagraph);



// 5. Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.


// Создаем кнопку и добавляем ее на страницу
const btn4 = document.createElement("button");
btn4.innerText = "Добавить сине/зеленые параграфы";
document.body.append(btn4);

// Создаем div с классом root и добавляем его на страницу
const root1 = document.createElement("div");
root1.className = "root";
document.body.append(root1);

// Создаем массив цветов (только синий и зеленый)
const colors = ["blue", "green", "red"];
let currentColorIndex = 0;

function createParagraphAndChangeColor() {
  // Получаем текущий цвет и увеличиваем индекс
  const currentColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;

  // Создаем параграф с текущим цветом и добавляем его в div
  const p1 = document.createElement("p");
  p1.innerText =
    "Параграфы – основной способ разделять большой текст на небольшие логические блоки. Эти блоки автоматически «отбиваются» друг от друга отступами. Такой текст намного проще читается и не пугает пользователей.";
  p1.style.color = currentColor;
  root1.append(p1);
}
// Добавляем обработчик событий на клик по кнопке
btn4.addEventListener("click", createParagraphAndChangeColor);
