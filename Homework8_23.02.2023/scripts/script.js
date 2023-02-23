// 1. Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

// получаем ссылку на элемент div с классом "numbers"
const numbersDiv = document.querySelector('.numbers');

// создаем цикл от 100 до 50 с шагом минус 10 
for (let index = 100; index >= 50; index -= 10) {
  // создаем новый элемент параграфа
  const p = document.createElement('p');
  // устанавливаем текстовое содержимое параграфа равным текущему значению i
  p.innerText = index;
  // добавляем параграф в div с классом "numbers"
  numbersDiv.append(p);
}

// 2. Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом stringscontainer. Строки взять произвольные.

const stringsArr = ['строка 1', 'строка 2', 'строка 3', 'строка 4', 'строка 5', 'строка 6'];  

// получаем ссылку на элемент div с классом "stringscontainer"
const stringsContainer = document.querySelector('.stringscontainer');

// проходимся по массиву строк с помощью цикла
for (let index = 0; index < stringsArr.length; index++) {
  // создаем новый элемент параграфа
  const p = document.createElement('p');
  // устанавливаем текстовое содержимое параграфа равным текущей строке
  p.innerText = stringsArr[index];
  // добавляем параграф в div с классом "stringscontainer"
  stringsContainer.append(p);
}

// 3. Написать цикл, который проходится по массиву с объектами - у объектов свойства firstname, lastname и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом userscontainer.

const users = [
  { firstname: 'Иван', lastname: 'Иванов', age: 16 },
  { firstname: 'Дима', lastname: 'Петров', age: 18 },
  { firstname: 'Ира', lastname: 'Сидорова', age: 17 },
  { firstname: 'Анна', lastname: 'Чернова', age: 19 },
  { firstname: 'Сергей', lastname: 'Сергеев', age: 20 }
];
// получаем ссылку на элемент div с классом "userscontainer"
const userContainer = document.querySelector('.userscontainer');

// проходимся по массиву строк с помощью цикла
for (let index = 0; index < users.length; index++) {
  const user = users[index];
  
  // условным оператором выбираем только совершеннолетних
  if (user.age >= 18) {
    // если старше 18 создаем карточку / добавляем в переменную
    const card = document.createElement('div');
    card.classList.add('usercard');
    // создаем параграф в переменную для Имени и Фамилии пользователя
    const nameLastname = document.createElement('p');
    // добавляем имя и фамилию из массива users
    nameLastname.innerText = `${user.firstname} ${user.lastname}`;
    // создаем параграф в переменную для возраста пользователя
    const age = document.createElement('p');
    // добавляем возраст из массива users
    age.innerText = `аge: ${user.age}`;
    // добавляем в карточку имя и фамилию пользователя
    card.append(nameLastname);
    // добавляем в карточку возраст пользователя
    card.append(age);
    // добавляем карточку в div с классом "userscontainer"
    userContainer.append(card);
  }
}

