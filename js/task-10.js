function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
const inputEl = document.querySelector("input");

const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
buttonCreate.addEventListener("click", createBoxes);
function createBoxes(amount) {
  amount = inputEl.value;
  for (let i = 0; i <= amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = 30 + i * 10 + "px";
    newBox.style.backgroundColor = getRandomHexColor;
    boxesContainer.prepend(newBox);
  }
}

buttonDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes(event) {
  boxesContainer.innerHTML = "";
}
