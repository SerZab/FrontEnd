const form = document.querySelector("form");
const input = document.querySelector("#new_item_input");
const list = document.querySelector("#todo_list");
const dateInput = document.querySelector("#new_date_input");

const todoItems = [];

function addItem(event) {
  event.preventDefault();
  let itemDate = dateInput.value
  let text = input.value;
  text = text.trim(); // метод удаляет пробелы в начале и конце строки
  // alert("Error: empty value");
  form.reset(text);

  if (text === "") {
    return;
  }

  const todoItem = {
    text: text,
    status: false,
    date: itemDate
  };
  todoItems.push(todoItem);
  updateList();
}

function deleteItems(event) {
  const index = event.target.dataset.index;
  todoItems.splice(index, 1);

  updateList();
}
function toggleStatusHandler(event) {
  const index = event.target.dataset.index;
  todoItems[index].status = !todoItems[index].status;
  updateList();
}

function updateList() {
  list.innerHTML = "";
  for (let index = 0; index < todoItems.length; index++) {
    const { text, status, date } = todoItems[index];
    const li = document.createElement("li");
    li.setAttribute('data-date', date)
    const input = document.createElement("input");
    const label = document.createElement("label");
    const button = document.createElement("button");

    label.innerText = text;
    label.setAttribute("for", `item_${index}`);
    if (status){
      label.style.textDecoration = "line-through"
    }

    input.setAttribute("type", "checkbox");
    input.setAttribute("id", `item_${index}`);
    input.setAttribute("data-index", index);
    input.checked = status;
    input.addEventListener("change", toggleStatusHandler);

    button.innerText = "Remove";
    button.setAttribute("data-index", index);
    button.classList.add("remove-item");

    button.addEventListener("click", deleteItems);
    li.append(input, label, button);

    list.append(li);
  }
}

form.addEventListener("submit", addItem);
